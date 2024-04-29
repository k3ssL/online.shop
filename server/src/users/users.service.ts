import { Injectable } from "@nestjs/common"
import { User } from "./users.model"
import { InjectModel } from "@nestjs/sequelize"
import { CreateUserDto } from "./dto/create-user.dto"
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import { Basket } from "../basket/basket.model"
import { ApiError } from "error/ApiError"
import * as process from "process";
import {LoginDto} from "./dto/login.dto";


const generateJwt = (id: number, email: string, role?: string) => {
    return jwt.sign(
        {id: id, email: email, role: role},
        process.env.PRIVATE_KEY,
        {expiresIn: '24h'}
    )
}

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async registration(dto: CreateUserDto) {
        if (!dto.email || !dto.password) {
            return ApiError.badRequest("Invalid email or password")
        }
        const candidate = await this.userRepository.findOne({ where: { email: dto.email } })
        if (candidate) {
            return ApiError.badRequest("User already exists")
        }
        const hashPassword = await bcrypt.hash(dto.password, 5)
        const user = await User.create({...dto, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, dto.email, user.role)
        return token
    }

    async login(dto: LoginDto) {
        const user = await this.userRepository.findOne({where: {email: dto.email}})
        if (!user) {
            return ApiError.badRequest("User was not found")
        }
        let comparePassword = bcrypt.compareSync(dto.password, user.password)
        if (!comparePassword) {
            return ApiError.badRequest("Incorrect password")
        }
        const token = generateJwt(user.id, dto.email)
        return token
    }

    async findById(id: number) {
        return this.userRepository.findOne({
            where: { id },
        })
    }
}

import { Injectable } from "@nestjs/common"
import { User } from "./users.model"
import { InjectModel } from "@nestjs/sequelize"
import { CreateUserDto } from "./dto/create-user.dto"
import * as bcrypt from "bcrypt"
import { Basket } from "../basket/basket.model"
import { ApiError } from "error/ApiError"

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(dto: CreateUserDto) {
        if (!dto.email || !dto.password) {
            return ApiError.badRequest("Invalid email or password")
        }
        const candidate = await this.userRepository.findOne({ where: { email: dto.email } })
        if (candidate) {
            return ApiError.badRequest("User already exists")
        }
        const hashPassword = await bcrypt.hash(dto.password)
        const user = await User.create(dto)
        const basket = await Basket.create(user.id)
        return user
    }
}

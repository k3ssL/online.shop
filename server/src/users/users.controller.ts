import { Body, Controller, Post } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { UsersService } from "./users.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { Token } from "../models/token.model"
import { LoginDto } from "./dto/login.dto"

@ApiTags("Users")
@Controller("")
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({ summary: "Create user" })
    @ApiResponse({ status: 200, type: Token })
    @Post("/registration")
    async registration(@Body() userDto: CreateUserDto) {
        const token = await this.userService.registration(userDto)
        return { token: token }
    }

    @ApiOperation({ summary: "Login" })
    @ApiResponse({ status: 200, type: Token })
    @Post("/login")
    async login(@Body() userDto: LoginDto) {
        const token = await this.userService.login(userDto)
        return { token: token }
    }
}

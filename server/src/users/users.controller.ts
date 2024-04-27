import { Body, Controller, Post } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { UsersService } from "./users.service"
import { User } from "./users.model"
import { UserDto } from "./dto/user.dto"
import {Token} from "../token/token.module";

@ApiTags("Users")
@Controller("users")
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({ summary: "Create user" })
    @ApiResponse({ status: 200, type: Token })
    @Post('/registration')
    async registration(@Body() userDto: UserDto) {
        const token = await this.userService.registration(userDto)
        return token
    }

    @ApiOperation({ summary: "Login" })
    @ApiResponse({ status: 200, type: Token })
    @Post('/login')
    async login(@Body() userDto: UserDto) {
        const token = await this.userService.login(userDto)
        return token
    }
}

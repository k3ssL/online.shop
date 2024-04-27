import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, Length } from "class-validator"

export class UserDto {
    @ApiProperty({ example: "example@gmail.com", description: "Email address" })
    @IsString({ message: "Must be a string" })
    @IsEmail({}, { message: "Invalid email" })
    readonly email: string

    @ApiProperty({ example: "password123", description: "Password" })
    @IsString({ message: "Must be a string" })
    @Length(3, 16, { message: "The password must contain at least 3 and no more than 16 characters" })
    readonly password: string

    @ApiProperty({ example: "USER", description: "role" })
    readonly role: string
}

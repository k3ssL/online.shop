import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateDeviceDto {
    @ApiProperty({ example: "Samsung", description: "Device name" })
    @IsString({ message: "Must be a string" })
    readonly name: string

    @ApiProperty({ example: "2000", description: "Device price" })
    @IsNumber({}, { message: "Must be a number" })
    readonly price: number

    @ApiProperty({ example: "1", description: "Brand id" })
    @IsNumber({}, { message: "Must be a number" })
    readonly branId: number

    @ApiProperty({ example: "1", description: "Type id" })
    @IsNumber({}, { message: "Must be a number" })
    readonly typeId: number

    @ApiProperty({ example: "Samsung", description: "Product brand" })
    @IsString({ message: "Must be a string" })
    readonly info: string

    @ApiProperty({ example: "Samsung", description: "Product brand" })
    readonly img: string
}

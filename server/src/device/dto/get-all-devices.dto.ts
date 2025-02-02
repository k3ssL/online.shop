import { ApiProperty } from "@nestjs/swagger"
import { IsNumber } from "class-validator"

export class GetAllDevicesDto {
    @ApiProperty({ example: "1", description: "Brand id", required: false })
    @IsNumber({}, { message: "Must be a number" })
    readonly brandId: number

    @ApiProperty({ example: "1", description: "Type id", required: false })
    @IsNumber({}, { message: "Must be a number" })
    readonly typeId: number

    @ApiProperty({ example: "1", description: "Limit", required: false })
    @IsNumber({}, { message: "Must be a number" })
    readonly limit: number

    @ApiProperty({ example: "1", description: "Page", required: false })
    @IsNumber({}, { message: "Must be a number" })
    readonly page: number
}

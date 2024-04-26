import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateBrandDto {
    @ApiProperty({ example: "Samsung", description: "Product brand" })
    @IsString({ message: "Must be a string" })
    readonly name: string
}

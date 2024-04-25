import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateTypeDto {
    @ApiProperty({example: 'Fridge', description: 'Product type'})
    @IsString({message: 'Must be a string'})
    readonly name: string
}
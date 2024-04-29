import { Body, Controller, Get, Post } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { TypeService } from "./type.service"
import { Type } from "../models/type.model"
import { CreateTypeDto } from "./dto/create-type.dto"

@ApiTags("Type")
@Controller("type")
export class TypeController {
    constructor(private typeService: TypeService) {}

    @ApiOperation({ summary: "Create type" })
    @ApiResponse({ status: 200, type: Type })
    @Post()
    async create(@Body() typeDto: CreateTypeDto) {
        const type = await this.typeService.create(typeDto)
        return type
    }

    @ApiOperation({ summary: "Get all types" })
    @ApiResponse({ status: 200, type: Type, isArray: true })
    @Get()
    async getAll() {
        const types = await this.typeService.getAll()
        return types
    }
}

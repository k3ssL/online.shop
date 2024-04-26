import { Body, Controller, Get, Post } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { Brand } from "./brand.model"
import { CreateBrandDto } from "./dto/create-brand.dto"
import { BrandService } from "./brand.service"

@ApiTags("Brand")
@Controller("brand")
export class BrandController {
    constructor(private brandService: BrandService) {}

    @ApiOperation({ summary: "Create brand" })
    @ApiResponse({ status: 200, type: Brand })
    @Post()
    async create(@Body() brandDto: CreateBrandDto) {
        const brand = await this.brandService.create(brandDto)
        return brand
    }

    @ApiOperation({ summary: "Get all brands" })
    @ApiResponse({ status: 200, type: Brand, isArray: true })
    @Get()
    async getAll() {
        const brands = await this.brandService.getAll()
        return brands
    }
}

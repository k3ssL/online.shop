import { Injectable } from "@nestjs/common"
import { CreateBrandDto } from "./dto/create-brand.dto"
import { Brand } from "../models/brand.model"

@Injectable()
export class BrandService {
    async create(dto: CreateBrandDto) {
        const brand = await Brand.create(dto)
        return brand
    }

    async getAll() {
        const brands = await Brand.findAll()
        return brands
    }
}

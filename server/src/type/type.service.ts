import { Injectable } from '@nestjs/common';
import { Type } from "./type.model";
import {CreateTypeDto} from "./dto/create-type.dto";

@Injectable()
export class TypeService {
    async create(dto: CreateTypeDto) {
        const type = await Type.create(dto)
        return type
    }

    async getAll() {
        const types = await Type.findAll()
        return types
    }
}

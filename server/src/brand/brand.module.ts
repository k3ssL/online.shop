import { Module } from "@nestjs/common"
import { BrandService } from "./brand.service"
import { BrandController } from "./brand.controller"
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../models/users.model";
import {Brand} from "../models/brand.model";

@Module({
    imports: [SequelizeModule.forFeature([Brand])],
    providers: [BrandService],
    controllers: [BrandController],
})
export class BrandModule {}

import { MiddlewareConsumer, Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import * as process from "process"
import { User } from "./models/users.model"
import { UsersModule } from "./users/users.module"
import { ConfigModule } from "@nestjs/config"
import { Basket } from "./models/basket.model"
import { BasketDevice } from "./models/basketDevice.model"
import { Device } from "./models/device.model"
import { DeviceInfo } from "./models/deviceInfo.model"
import { Rating } from "./models/rating.model"
import { Type } from "./models/type.model"
import { Brand } from "./models/brand.model"
import { TypeBrand } from "./models/typeBrand.model"
import { TypeModule } from "./type/type.module"
import { BrandModule } from "./brand/brand.module"
import { DeviceModule } from "./device/device.module"
import { AuthMiddleware } from "../middleware/auth.middleware"
import { CheckRoleMiddleware } from "../middleware/checkRole.middleware"

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Basket, BasketDevice, Device, DeviceInfo, Rating, Type, Brand, TypeBrand],
            autoLoadModels: true,
        }),
        UsersModule,
        TypeModule,
        BrandModule,
        DeviceModule,
    ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware, CheckRoleMiddleware).forRoutes("type", "brand", "device")
    }
}

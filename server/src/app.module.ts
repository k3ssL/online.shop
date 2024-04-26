import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import * as process from "process"
import { User } from "./users/users.model"
import { UsersModule } from "./users/users.module"
import { ConfigModule } from "@nestjs/config"
import { Basket } from "./basket/basket.model"
import { BasketDevice } from "./basketDevice/basketDevice.model"
import { Device } from "./device/device.model"
import { DeviceInfo } from "./deviceInfo/deviceInfo.model"
import { Rating } from "./rating/rating.model"
import { Type } from "./type/type.model"
import { Brand } from "./brand/brand.model"
import { TypeBrand } from "./typeBrand/typeBrand.module"
import { ApiErrorMiddleware } from "../middleware/api-error.middleware"
import { TypeModule } from "./type/type.module"
import { BrandModule } from "./brand/brand.module"
import { DeviceModule } from "./device/device.module"

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
    // configure(consumer: MiddlewareConsumer) {
    //   consumer
    //       .apply(ApiErrorMiddleware)
    //       .forRoutes('*');
    // }
}

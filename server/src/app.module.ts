import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import * as process from "process";
import {User} from "./users/users.model";
import {UsersModule} from "./users/users.module";
import {ConfigModule} from "@nestjs/config";


@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: 'postgres',
      password: 'root',
      database: process.env.POSTGRES_DB,
      models: [User],
      autoLoadModels: true
    }),
    UsersModule,
  ],
})
export class AppModule {}

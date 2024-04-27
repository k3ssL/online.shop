import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import * as express from "express"
import * as path from "path"
require("dotenv").config()

async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule, { cors: false })

    app.enableCors({ credentials: true, origin: true })
    app.use(express.static(path.resolve(__dirname, "static")))
    app.setGlobalPrefix("api")

    const config = new DocumentBuilder()
        .setTitle("Online-shop API")
        .setDescription("Documentation REST API")
        .setVersion("1.0.0")
        .addTag("k3ssL")
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("/api/docs", app, document)

    await app.listen(PORT)
}

start()

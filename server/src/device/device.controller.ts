import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common"
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { DeviceService } from "./device.service"
import { CreateDeviceDto } from "./dto/create-device.dto"
import { Device } from "./device.model"
import { FileInterceptor } from "@nestjs/platform-express"
import { fileStorage } from "./storage"

@ApiTags("Device")
@Controller("device")
export class DeviceController {
    constructor(private deviceService: DeviceService) {}

    @ApiOperation({ summary: "Create device" })
    @ApiResponse({ status: 200, type: Device })
    @Post()
    @UseInterceptors(
        FileInterceptor("img", {
            storage: fileStorage,
        }),
    )
    @ApiConsumes("multipart/form-data")
    @ApiBody({
        schema: {
            type: "object",
            properties: {
                name: {
                    type: "string",
                },
                price: {
                    type: "number",
                },
                brandId: {
                    type: "number",
                },
                typeId: {
                    type: "number",
                },
                img: {
                    type: "string",
                    format: "binary",
                },
            },
        },
    })
    async create(@Body() deviceDto: CreateDeviceDto, @UploadedFile() file: Express.Multer.File) {
        const device = await this.deviceService.create(deviceDto, file)
        return device
    }
}

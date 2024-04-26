import { Injectable } from "@nestjs/common"
import { CreateDeviceDto } from "./dto/create-device.dto"
import { Device } from "./device.model"
import { InjectModel } from "@nestjs/sequelize"

@Injectable()
export class DeviceService {
    constructor(@InjectModel(Device) private deviceRepository: typeof Device) {}

    async create(dto: CreateDeviceDto, file: Express.Multer.File) {
        const device = await this.deviceRepository.create({ ...dto, img: file.filename })
        return device
    }
}

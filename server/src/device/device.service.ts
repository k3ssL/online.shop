import { Injectable } from "@nestjs/common"
import { CreateDeviceDto } from "./dto/create-device.dto"
import { Device } from "./device.model"
import { InjectModel } from "@nestjs/sequelize"
import {GetAllDevicesDto} from "./dto/get-all-devices.dto";

@Injectable()
export class DeviceService {
    constructor(@InjectModel(Device) private deviceRepository: typeof Device) {}

    async create(dto: CreateDeviceDto, file: Express.Multer.File) {
        const device = await this.deviceRepository.create({ ...dto, img: file.filename })
        return device
    }

    async getAll(dto: GetAllDevicesDto) {
        let devices

        if (!dto) {
            devices = await this.deviceRepository.findAll()
        }

        if (dto.brandId && !dto.typeId) {
            devices = await this.deviceRepository.findAll({where: {brandId: dto.brandId}})
        }

        if (!dto.brandId && dto.typeId) {
            devices = await this.deviceRepository.findAll({where: {typeId: dto.typeId}})
        }

        if (dto.brandId && dto.typeId) {
            devices = await this.deviceRepository.findAll({where: {brandId: dto.brandId, typeId: dto.typeId}})
        }

        return devices
    }
}

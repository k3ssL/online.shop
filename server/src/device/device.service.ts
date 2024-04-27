import { Injectable } from "@nestjs/common"
import { CreateDeviceDto } from "./dto/create-device.dto"
import { Device } from "./device.model"
import { InjectModel } from "@nestjs/sequelize"
import {GetAllDevicesDto} from "./dto/get-all-devices.dto";
import {DeviceInfo} from "../deviceInfo/deviceInfo.model";

@Injectable()
export class DeviceService {
    constructor(@InjectModel(Device) private deviceRepository: typeof Device) {}

    async create(dto: CreateDeviceDto, file: Express.Multer.File) {
        const device = await this.deviceRepository.create({ ...dto, img: file.filename })
        if (dto.info) {
            dto.info.forEach(i =>
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                })
            )
        }
        return device
    }

    async getAll(dto: GetAllDevicesDto) {
        let page = dto.page || 1
        let limit = dto.limit || 9
        let offset = page * limit - limit
        let devices
        if (!dto.typeId && !dto.brandId) {
            devices = await this.deviceRepository.findAndCountAll({ limit, offset })
        }

        if (dto.brandId && !dto.typeId) {
            devices = await this.deviceRepository.findAndCountAll({where: {brandId: dto.brandId}, limit, offset})
        }

        if (!dto.brandId && dto.typeId) {
            devices = await this.deviceRepository.findAndCountAll({where: {typeId: dto.typeId}, limit, offset})
        }

        if (dto.brandId && dto.typeId) {
            devices = await this.deviceRepository.findAndCountAll({where: {brandId: dto.brandId, typeId: dto.typeId}, limit, offset})
        }

        return devices
    }

    async getOne(id: number) {
        const device = await this.deviceRepository.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        })
        return device
    }
}

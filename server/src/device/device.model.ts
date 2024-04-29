import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Brand } from "../brand/brand.model"
import { Type } from "../type/type.model"
import { Rating } from "../rating/rating.model"
import { BasketDevice } from "../basketDevice/basketDevice.model"
import { DeviceInfo } from "../deviceInfo/deviceInfo.model"
import { ApiProperty } from "@nestjs/swagger"

@Table({ tableName: "device" })
export class Device extends Model<Device> {
    @ApiProperty({ example: "1", description: "Unique device ID" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: "12 pro", description: "Device name" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string

    @ApiProperty({ example: "100000", description: "Device price" })
    @Column({ type: DataType.INTEGER, allowNull: false })
    price: number

    @ApiProperty({ example: "5", description: "Device rating" })
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    rating: number

    @ApiProperty({ example: "asrogeokOK13.jpg", description: "Device img name" })
    @Column({ type: DataType.STRING, allowNull: false })
    img: string

    @ApiProperty({ example: "1", description: "Brand ID" })
    @ForeignKey(() => Type)
    @Column({ type: DataType.INTEGER, allowNull: false })
    typeId: number

    @ApiProperty({ example: "1", description: "Brand ID" })
    @ForeignKey(() => Brand)
    @Column({ type: DataType.INTEGER, allowNull: false })
    brandId: number

    @BelongsTo(() => Type)
    type: Type

    @BelongsTo(() => Brand)
    brand: Brand

    @HasMany(() => Rating)
    deviceRating: Rating[]

    @HasMany(() => BasketDevice)
    basketDevice: BasketDevice[]

    @HasMany(() => DeviceInfo)
    info: DeviceInfo[]
}

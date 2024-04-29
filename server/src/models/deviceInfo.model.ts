import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Device } from "./device.model"

@Table({ tableName: "device_info" })
export class DeviceInfo extends Model<DeviceInfo> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ForeignKey(() => Device)
    @Column({ type: DataType.INTEGER, allowNull: false })
    deviceId: number

    @Column({ type: DataType.INTEGER, allowNull: false })
    title: string

    @Column({ type: DataType.STRING, allowNull: false })
    description: string

    @BelongsTo(() => Device)
    device: Device
}

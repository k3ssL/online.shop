import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Brand} from "../brand/brand.model";
import {Type} from "../type/type.model";
import {Rating} from "../rating/rating.model";
import {BasketDevice} from "../basketDevice/basketDevice.model";
import {DeviceInfo} from "../deviceInfo/deviceInfo.model";

@Table({tableName: 'device'})
export class Device extends Model<Device> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @Column({type: DataType.INTEGER, allowNull: false})
    price: string

    @Column({type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    rating: number

    @Column({type: DataType.STRING, allowNull: false})
    img: string

    @ForeignKey(() => Type)
    @Column({type: DataType.INTEGER, allowNull: false})
    typeId: number

    @ForeignKey(() => Brand)
    @Column({type: DataType.INTEGER, allowNull: false})
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
    basketInfo: DeviceInfo[]
}
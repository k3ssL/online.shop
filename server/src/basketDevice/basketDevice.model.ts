import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Basket} from "../basket/basket.model";
import {Device} from "../device/device.model";

@Table({tableName: 'basket_device'})
export class BasketDevice extends Model<BasketDevice> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER, allowNull: false})
    deviceId: number

    @ForeignKey(() => Basket)
    @Column({type: DataType.INTEGER, allowNull: false})
    basketId: string

    @BelongsTo(() => Basket)
    basket: Basket

    @BelongsTo(() => Basket)
    basketDevice: BasketDevice
}
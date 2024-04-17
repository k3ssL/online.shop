import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Basket} from "../basket/basket.model";

@Table({tableName: 'basket_device'})
export class BasketDevice extends Model<BasketDevice> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => Basket)
    @Column({type: DataType.INTEGER, allowNull: false})
    basketId: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: string

    @BelongsTo(() => Basket)
    basket: Basket

    @BelongsTo(() => User)
    user: User
}
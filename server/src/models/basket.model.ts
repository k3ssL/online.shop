import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { User } from "./users.model"
import { BasketDevice } from "./basketDevice.model"

@Table({ tableName: "basket" })
export class Basket extends Model<Basket> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number

    @BelongsTo(() => User)
    user: User

    @HasMany(() => BasketDevice)
    devices: BasketDevice[]
}

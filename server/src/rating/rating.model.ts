import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Device} from "../device/device.model";

@Table({tableName: 'rating'})
export class Rating extends Model<Rating> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number

    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER, allowNull: false})
    deviceId: number

    @Column({type: DataType.INTEGER, allowNull: false})
    rate: number

    @BelongsTo(() => User)
    user: User

    @BelongsTo(() => Device)
    device: Device
}
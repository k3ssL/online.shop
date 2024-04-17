import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Device} from "../device/device.model";
import {Brand} from "../brand/brand.model";
import {TypeBrand} from "../typeBrand/typeBrand.module";

@Table({tableName: 'type'})
export class Type extends Model<Type> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @HasMany(() => Device)
    device: Device[]

    @BelongsToMany(() => Brand, {through: () => TypeBrand})
    typeBrand: TypeBrand
}
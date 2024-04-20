import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Device} from "../device/device.model";
import {Brand} from "../brand/brand.model";
import {TypeBrand} from "../typeBrand/typeBrand.module";
import {ApiProperty} from "@nestjs/swagger";

@Table({tableName: 'type'})
export class Type extends Model<Type> {

    @ApiProperty({example: '1', description: 'Unique type ID'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'Fridge', description: 'Product Type'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @HasMany(() => Device)
    device: Device[]

    @BelongsToMany(() => Brand, {through: () => TypeBrand})
    typeBrand: TypeBrand
}
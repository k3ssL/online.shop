import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {TypeBrand} from "../typeBrand/typeBrand.module";
import {Type} from "../type/type.model";

@Table({tableName: 'brand'})
export class Brand extends Model<Brand> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @BelongsToMany(() => Type, {through: () => TypeBrand})
    typeBrand: TypeBrand
}
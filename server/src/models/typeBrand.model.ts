import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Type } from "./type.model"
import { Brand } from "./brand.model"

@Table({ tableName: "type_brand" })
export class TypeBrand extends Model<TypeBrand> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ForeignKey(() => Type)
    type: Type

    @ForeignKey(() => Brand)
    brand: Brand
}

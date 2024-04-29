import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript"
import { TypeBrand } from "./typeBrand.model"
import { Type } from "./type.model"
import { ApiProperty } from "@nestjs/swagger"

@Table({ tableName: "brand" })
export class Brand extends Model<Brand> {
    @ApiProperty({ example: "1", description: "Unique brand ID" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: "Samsung", description: "Brand name" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string

    @BelongsToMany(() => Type, { through: () => TypeBrand })
    typeBrand: TypeBrand
}

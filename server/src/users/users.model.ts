import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { Basket } from "../basket/basket.model"

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: "1", description: "Unique user ID" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: "example@gmail.com", description: "User mailing address" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string

    @ApiProperty({ example: "password123", description: "User password" })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string

    @ApiProperty({ example: "USER", description: "User role" })
    @Column({ type: DataType.STRING, allowNull: false, defaultValue: "USER" })
    role: string

    @HasOne(() => Basket)
    basket: Basket
}

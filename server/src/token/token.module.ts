import { Model } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"

export class Token extends Model<Token> {
    @ApiProperty({
        example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJleGFtcGxlQGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzE0MjQ3NDk5LCJleHAiOjE3MTQzMzM4OTl9.FVKpFZ2VmRsbHzMkLMwIBTyO-VWztVUvHvirqWuURgM",
        description: "Email address",
    })
    token: string
}

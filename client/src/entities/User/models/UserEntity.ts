export interface UserEntity {
    id: number
    email: string
    role: UserRoleEnum
}

export enum UserRoleEnum {
    User = "USER",
    Admin = "ADMIN",
}
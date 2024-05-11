import { makeAutoObservable } from "mobx"
import { UserDto } from "../entities/User/models/dto/UserDto"

export default class UserStore {
    private _isAuth: boolean
    private _user: UserDto

    constructor() {
        this._isAuth = true
        this._user = {} as UserDto
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool
    }

    setUser(user: UserDto) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}

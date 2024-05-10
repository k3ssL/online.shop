import {makeAutoObservable} from "mobx";
import {TypeDto} from "../entities/Type/models/dto/TypeDto";
import {BrandDto} from "../entities/Brand/models/dto/BrandDto";
import {DeviceDto} from "../entities/Device/models/dto/DeviceDto";

export default class DeviceStore {
    private _types: TypeDto[]
    private _brands: BrandDto[]
    private _devices: DeviceDto[]
    private _selectedType: TypeDto
    private _selectedBrand: BrandDto

    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]

        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]

        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, brandId: 1, typeId: 2, img: "https://cdn1.ozone.ru/s3/multimedia-n/6069408023.jpg"},
            {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, brandId: 1, typeId: 2, img: "https://cdn1.ozone.ru/s3/multimedia-n/6069408023.jpg"},
            {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, brandId: 1, typeId: 2, img: "https://cdn1.ozone.ru/s3/multimedia-n/6069408023.jpg"},
            {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, brandId: 1, typeId: 2, img: "https://cdn1.ozone.ru/s3/multimedia-n/6069408023.jpg"},
        ]

        this._selectedType = {} as TypeDto
        this._selectedBrand = {} as DeviceDto

        makeAutoObservable(this)
    }

    setTypes(types: TypeDto[]) {
        this._types = types
    }

   setBrands(brands: BrandDto[]) {
        this._brands = brands
   }

    setDevices(devices: DeviceDto[]) {
        this._devices = devices
    }

    setSelectedType(type: TypeDto) {
        this._selectedType = type
    }

    setSelectedBrand(brand: BrandDto) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
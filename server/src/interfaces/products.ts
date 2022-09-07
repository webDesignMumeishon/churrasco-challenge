import {ObjectId} from 'mongoose'

export default interface IProduct {
    _id?: ObjectId,
    SKU: string,
    code: number,
    name: string,
    description: string,
    pictures: Array<string>,
    price: number,
    currency: string
}

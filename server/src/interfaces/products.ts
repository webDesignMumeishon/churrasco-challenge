import {ObjectId} from 'mongoose'

export default interface IProduct {
    //optionals
    _id?: ObjectId,
    code?: number,
    description?: string,
    //required
    SKU: string,
    name: string,
    pictures: Array<string>,
    price: number,
    currency: string
}

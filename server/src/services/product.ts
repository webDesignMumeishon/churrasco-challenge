import { Product as ProductSchema } from "../models/products";
import IProduct from '../interfaces/products'
import { HydratedDocument } from 'mongoose';

export const getProductsDB = async () => {
    return await ProductSchema.find({}, {_id: 0}).exec()
}

export const insertProductDB = async (product : IProduct) => {

    const insertedProduct : HydratedDocument<IProduct> = new ProductSchema({
        SKU: product.SKU,
        code: product.code,
        name: product.name,
        description: product.name,
        pictures: product.pictures,
        price: product.price,
        currency: product.currency
    });

    await insertedProduct.save();
}



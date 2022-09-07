import { Product as ProductSchema } from "../models/products";

export const getProductsDB = async () => {
    return await ProductSchema.find({},{_id:0}).exec()
}



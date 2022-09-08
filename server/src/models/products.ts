import mongoose, {Schema} from "mongoose";
import IProduct from '../interfaces/products'

const productSchema = new mongoose.Schema<IProduct>({
    SKU: String,
    code: Number,
    name: String,
    description: String,
    pictures: [String],
    price: Number,
    currency: String
});

export const Product = mongoose.model('Product', productSchema);
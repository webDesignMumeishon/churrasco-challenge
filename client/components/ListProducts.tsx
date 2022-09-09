import { IProduct } from '../types/products'
import Product from './Product'

type props = {
    products: IProduct[]
}

const ListProducts: React.FC<props> = ({ products }) => {
    return (
        <div>
            {products.map((p: any) => {
                return <Product product={p} />
            })}
        </div>
    )
}

export default ListProducts

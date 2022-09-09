import { IProduct } from '../types/products'

type props = {
    product: IProduct
}

const Product: React.FC<props> = ({ product }) => {
    return (
        <div>
            {product.SKU}
        </div>
    )
}

export default Product
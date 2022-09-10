import { IProduct } from '../types/products'

type props = {
  product: IProduct
}

const Product: React.FC<props> = ({ product }) => {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {product.name}
      </th>
      <td>
        {product.SKU}
      </td>
      <td>
        {product.code}
      </td>
      <td>
        {product.currency}
      </td>
      <td>
        {product.price}
      </td>
    </tr>
  )
}

export default Product

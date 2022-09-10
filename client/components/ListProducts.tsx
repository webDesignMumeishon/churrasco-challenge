import { IProduct } from '../types/products'
import Product from './Product'

type props = {
  products: IProduct[]
}

const ListProducts: React.FC<props> = ({ products }) => {
  return (
    <div className='container mx-auto flex justify-center mt-2'>
      <table className='table-auto w-full text-sm text-center text-gray-500 dark:text-gray-400 bg-white'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className='p-3'>Name</th>
            <th className='p-3'>SKU</th>
            <th className='p-3'>Code</th>
            <th className='p-3'>Currency</th>
            <th className='p-3'>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p: IProduct) => {
            return <Product key={p.SKU} product={p} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListProducts

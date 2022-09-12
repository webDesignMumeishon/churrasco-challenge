import { IProduct } from '../types/products'
import Product from './Product'

type props = {
  products: IProduct[]
}

const ListProducts: React.FC<props> = ({ products }) => {

  return (
    <div className=''>
      <table className=''>
        <thead className=''>
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

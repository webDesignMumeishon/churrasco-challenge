import { IProduct } from '../types/products'
import { ECurrency } from '../types/products'
import styles from '../styles/Product.module.css'

type props = {
  product: IProduct
}

const Product: React.FC<props> = ({ product }) => {
  const mainImage = product?.pictures?.length > 0 ? product.pictures[0] : 'https://i.stack.imgur.com/6M513.png'
  const validCurrencies = Object.values(ECurrency)

  return (
    <div className={styles.cardContainer}>
      <p className={styles.skuNumber}>#{product.SKU || 'NotFound'}</p>
      <div className={styles.imgContainer}>
        <img className={styles.imgStyle} src={mainImage} alt="Image" />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.productName}>{product.name}</p>
        <p>Code: <span className={styles.codeLabel}>{product.code || 'NotFound'}</span></p>
        <p>Price: ${product.price} {validCurrencies.includes(product.currency as ECurrency) ? product.currency : ECurrency.PEN} </p>
      </div>
    </div>
  )
}

export default Product


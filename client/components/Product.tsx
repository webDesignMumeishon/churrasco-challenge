import { IProduct } from '../types/products'

import styles from '../styles/Product.module.css'

type props = {
  product: IProduct
}

const Product: React.FC<props> = ({ product }) => {


  const mainImage = product?.pictures?.length > 0 ? product.pictures[0] : 'https://i.stack.imgur.com/6M513.png'

  return (
    <div className={styles.cardContainer}>

      <p className={styles.skuNumber}>#{product.SKU}</p>

      <div className={styles.imgContainer}>
        <img className={styles.imgStyle} src={mainImage} alt="Image" />
      </div>

      <div className={styles.infoContainer}>
          <p className={styles.productName}>{product.name}</p>
          <p>Code: <span className={styles.codeLabel}>{product.code}</span></p>
          <p>Price: ${product.price} {product.currency} </p>
      </div>
    </div>
  )
}

export default Product

// {product.name}
// {product.SKU}
//     {product.code}
//     {product.currency}
//     {product.price}
import type { GetStaticProps, NextPage } from 'next'
import {IProducts, IProduct} from '../types/products'

export const getStaticProps : GetStaticProps = async (context) => {

    const result = await fetch("http://localhost:4000/product")
    const {products} : IProducts = await result.json()

    console.log(products)

    return{
        props: {
            list: products
        }
    }
}

const Products : NextPage<{list : IProducts}> = ({list} : any) => {
    return (
        <>
            <h1>Hello from products</h1>
            {list.map((p: IProduct) => {
               return <li>{p.name}</li>
            })}
        </>

    )

}

export default Products
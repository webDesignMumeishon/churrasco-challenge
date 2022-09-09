import type { GetStaticProps, NextPage } from 'next'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { IProducts, IProduct } from '../types/products'
import { setAuthState, selectAuthState } from '../slices/authSlice'

export const getStaticProps: GetStaticProps = async (context) => {
    const result = await fetch("http://localhost:4000/product")
    const { products }: IProducts = await result.json()
    return {
        props: {
            list: products
        }
    }
}

const Products: NextPage<{ list: IProducts }> = ({ list }: any) => {
    const router = useRouter()
    const authState: boolean = useSelector(selectAuthState);

    useEffect(() => {
        if (!authState) {
            router.push('/')
        }
    }, [])

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
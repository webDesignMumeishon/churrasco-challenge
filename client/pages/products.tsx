import type { GetServerSideProps, NextPage } from 'next'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { IProducts } from '../types/products'
import { selectAuthState } from '../slices/authSlice'
import ListProducts from '../components/ListProducts'

const Products: NextPage<{ list: IProducts }> = ({ list }: any) => {
    const router = useRouter()
    const authState: boolean = useSelector(selectAuthState);

    useEffect(() => {
        if (!authState) {
            router.push('/')
        }
    }, [])

    return (
        <div>
            <h1>Hello from products</h1>
            <ListProducts products={list} />
        </div>
    )
}

export default Products

export const getServerSideProps: GetServerSideProps = async (context) => {
    const result = await fetch("http://localhost:4000/product")
    const { products }: IProducts = await result.json()

    return {
        props: {
            list: products
        }
    }
}
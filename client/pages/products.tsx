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

  const handleClick = () => {
    // move to route add-product
  }

  useEffect(() => {
    authState
      ? router.push('/products')
      : router.push('/')
  }, [])

  return (
    <div>
      <h2 className='text-white font-bold text-2xl text-center w-full p-3'>Products</h2>
      <ListProducts products={list} />
      <button onClick={ handleClick } className='absolute p-2 px-3 hover:bg-neutral-400 top-2 right-5 rounded-md bg-neutral-300'>Add product</button>
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

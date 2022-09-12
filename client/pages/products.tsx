import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Link from 'next/link';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { IProducts } from '../types/products'
import { selectAuthState } from '../slices/authSlice'
import ListProducts from '../components/ListProducts'
import axios from 'axios';


const Products: NextPage<{ list: IProducts }> = ({ list }: any) => {
  const router = useRouter()
  const authState: boolean = useSelector(selectAuthState);

  // useEffect(() => {
  //   authState
  //     ? router.push('/products')
  //     : router.push('/')
  // }, [])


  return (
    <div>
      <h2 className=''>Products</h2>
      <Link href='add' className=''>Add product</Link>
      <ListProducts products={list} />
    </div>
  )
}
export default Products

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await axios.get("http://localhost:4000/product", {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Cookie: context.req.cookies.OursiteJWT || '',
    }
  })
  
  if(result.status !== 200) {
    console.log('what ?')
    return {
      props: {
        list: []
      }
    } 
  }

  return {
    props: {
      list: result.data.products
    }
  }
}

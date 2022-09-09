import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
const Home: NextPage = () => {

  const router = useRouter()

  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    if(isLogged){
      router.push('/products')
    }
  },[isLogged])

  return (
    <div className={styles.container}>
      <Head>
        <title>churrasco-challenge</title>
        <meta name="churrasco-challenge" content="Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.churrascoLogo} src="/churrasco-logo.png" alt="" />

        <form action="" className={styles.login}>

          <div className={styles.inputContainer}>
            <span className={styles.inputIcon}><FaUser/></span>
            <input className={styles.loginInput} type="text" placeholder='Username'/>
          </div>

          <div className={styles.inputContainer}>
            <span className={styles.inputIcon}><RiLockPasswordFill/></span>
            <input className={styles.loginInput}  type="text" placeholder='Password'/>
          </div>

        </form> 
      </main>

      <footer className={styles.footer}>
        <p>
          web services under your control
        </p>
      </footer>
    </div>
  )
}

export default Home

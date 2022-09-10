import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import Currency from '../components/Currency'

import FieldInput from '../components/FieldInput'
import styles from '../styles/AddProduct.module.css'



const AddProduct : NextPage = () => {

    type Currency = 'USD' | 'EUR' | 'PEN'

    enum ECurrency {
        USD = 'USD',
        EUR = 'EUR',
        PEN = 'PEN'
    }
    
    // useEffect(() => {
    //     if (!authState) {
    //         router.push('/')
    //     }
    // }, [])

    const [currency, setCurrency] = useState<Currency>('USD')


    const handleCurrencyOnChange = (e: any)  => {
        setCurrency(e.target.value)
    }


    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2>Add Product</h2>
                <form className={styles.mainForm}>
                    <FieldInput name={'SKU'}/>
                    <FieldInput name={'Code'}/>
                    <FieldInput name={'Name'}/>
                    <FieldInput name={'Price'}/>

                    <textarea className={styles.textareaInput} name="description" rows={5} placeholder="Description"></textarea>

                    <div>
                        <input 
                            type="radio" 
                            id="usd" 
                            name="currency" 
                            value={ECurrency.USD} 
                            onClick={handleCurrencyOnChange} 
                            defaultChecked
                        />
                        <label htmlFor="usd">USD</label>

                        <input 
                            type="radio" 
                            id="eur" 
                            name="currency" 
                            value={ECurrency.EUR} 
                            onClick={handleCurrencyOnChange} 
                        />
                        <label htmlFor="eur">EUR</label>

                        <input 
                            type="radio" 
                            id="pen" 
                            name="currency" 
                            value={ECurrency.PEN} 
                            onClick={handleCurrencyOnChange} 
                        />
                        <label htmlFor="pen">PEN</label>
                    </div>
                </form>
            </div>
        </div>
    )
}




export default AddProduct


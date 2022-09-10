import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'

import Currency from '../components/Currency'
import FieldInput from '../components/FieldInput'
import styles from '../styles/AddProduct.module.css'



const AddProduct : NextPage = () => {
    
    // useEffect(() => {
    //     if (!authState) {
    //         router.push('/')
    //     }
    // }, [])

    const [currency, setCurrency] = useState<string>('USD')

    const handleCurrencyOnChange = (e: any)  => {
        setCurrency(e.target.value)
    }


    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2>Add Product</h2>
                <form className={styles.mainForm}>
                    <FieldInput name={'SKU'} />
                    <FieldInput name={'Code'} opcional={true}/>
                    <FieldInput name={'Name'}/>
                    <FieldInput name={'Price'}/>

                    <div className={styles.textareaWrapper}>
                        <p>
                            Description <span className={styles.opcionalLabel}>opcional</span>
                        </p> 
                        <textarea className={styles.textareaInput} name="description" rows={5} placeholder="Description"></textarea>
                    </div>


                    <Currency handleCurrencyOnChange={handleCurrencyOnChange}/>
                </form>
            </div>
        </div>
    )
}




export default AddProduct


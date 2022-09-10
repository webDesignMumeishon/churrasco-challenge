import type { GetServerSideProps, NextPage } from 'next'
import { ChangeEvent, FormEvent, useState } from 'react'

import Currency from '../components/Currency'
import FieldInput from '../components/FieldInput'
import OptionalTag from '../components/OptionalTag'
import styles from '../styles/AddProduct.module.css'


interface IProductInput {
    sku: string
    code: string
    name: string
    price: number
}

const AddProduct: NextPage = () => {

    // useEffect(() => {
    //     if (!authState) {
    //         router.push('/')
    //     }
    // }, [])

    // states
    const [currency, setCurrency] = useState<string>('USD')
    const [textAreaValue, setTextAreaValue] = useState<string>('')
    const [productInputs, setProductsInputs] = useState<IProductInput>({
        sku: '',
        code: '',
        name: '',
        price: 0
    })

    // handlers
    const handleCurrencyOnChange = (e: any) => {
        setCurrency(e.target.value)
    }

    const handleTextAreaOnChange = (e: any) => {
        setTextAreaValue(e.target.value)
    }

    const handleInputFieldOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setProductsInputs((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()

        const bodyData = {
            SKU : productInputs.sku,
            code: productInputs.code,
            name: productInputs.name,
            description: textAreaValue,
            pictures: [],
            price: productInputs.price,
            currency
        }

        const request = {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(bodyData)
        };

        const response : Response = await fetch("http://localhost:4000/product", request);
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2>Add Product</h2>
                <form className={styles.mainForm} onSubmit={handleOnSubmit}>
                    <FieldInput
                        name={'SKU'}
                        value={productInputs.sku}
                        handleInput={handleInputFieldOnChange}
                    />
                    <FieldInput
                        name={'Code'}
                        opcional={true}
                        value={productInputs.code}
                        handleInput={handleInputFieldOnChange}
                    />
                    <FieldInput
                        name={'Name'}
                        value={productInputs.name}
                        handleInput={handleInputFieldOnChange}
                    />
                    <FieldInput
                        name={'Price'}
                        value={productInputs.price}
                        type={'number'}
                        handleInput={handleInputFieldOnChange}
                    />

                    <div className={styles.textareaWrapper}>
                        <p>
                            Description <OptionalTag />
                        </p>
                        <textarea
                            className={styles.textareaInput}
                            name="description" rows={5}
                            placeholder="Description"
                            value={textAreaValue}
                            onChange={handleTextAreaOnChange}
                        >
                        </textarea>
                    </div>
                    <Currency handleCurrencyOnChange={handleCurrencyOnChange} />
                    <button type='submit' className={styles.submitBtn}>Submit</button>
                </form>
            </div>
        </div>
    )
}




export default AddProduct


import { ChangeEvent, MouseEventHandler, useState } from "react"



const Currency = () => {

    const [checkedUSD, setCheckedUSD] = useState<boolean>(true)


    const handleCurrencyOnChange = (e: any)  => {
        console.log(e.target)
    }

    return (
        <div>
            <input type="radio" id="usd" name="currency" value="USD" onClick={handleCurrencyOnChange} checked={checkedUSD}/>
            <label htmlFor="usd">USD</label>

            <input type="radio" id="eur" name="currency" value="EUR" onClick={handleCurrencyOnChange} />
            <label htmlFor="eur">EUR</label>

            <input type="radio" id="pen" name="currency" value="PEN" onClick={handleCurrencyOnChange} />
            <label htmlFor="pen">PEN</label>
        </div>
    )
}

export default Currency
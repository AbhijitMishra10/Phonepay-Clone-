import React, { useState } from 'react'
import { bill } from '../services/apiHelper'
function Bill() {
  const[amount, setAmount] = useState("")
  const[biller, setBiller] = useState("")
  const[pin, setPin] = useState("")
  const handleClick = async() => {
    try {
        const {data} = await bill({biller, amount: Number(amount), pin})
        alert(data.message)
        setAmount("")
        setBiller("")
        setPin("")
    } catch (error) {
        console.error(error)
        alert("Recharge failed")
    }
  }
  return (
    <div>
        <h2>Bill Payment</h2>
        <input type="text" placeholder='Enter Biller Name' value={bill} onChange={(e) => setBiller(e.target.value)}/>
        <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <input type="password" placeholder='Enter Your Upi' value={pin} onChange={(e) => setPin(e.target.value)}/>
        <button onClick={handleClick}>Recharge</button>
    </div>
  )
}

export default Bill
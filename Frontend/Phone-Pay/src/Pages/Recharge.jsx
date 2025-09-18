import React, { useState } from 'react'
import { recharge } from '../services/apiHelper'
function Recharge() {
  const[amount, setAmount] = useState("")
  const[phone, setPhone] = useState("")
  const[pin, setPin] = useState("")
  const handleClick = async() => {
    try {
        const {data} = await recharge({phone, amount: Number(amount), pin})
        alert(data.message)
        setAmount("")
        setPhone("")
        setPin("")
    } catch (error) {
        console.error(error)
        alert("Recharge failed")
    }
  }
  return (
    <div>
        <h2>Mobile Recharge</h2>
        <input type="text" placeholder='Enter Mobile Number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <input type="password" placeholder='Enter Your Upi' value={pin} onChange={(e) => setPin(e.target.value)}/>
        <button onClick={handleClick}>Recharge</button>
    </div>
  )
}

export default Recharge
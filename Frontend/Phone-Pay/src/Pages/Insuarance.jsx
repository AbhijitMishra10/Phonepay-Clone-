import React, { useState } from 'react'
import { insuaranceService } from '../services/apiHelper'
import {toast} from 'react-toastify'
function Insuarance() {
  const[policyHolder, setPolicyHolder] = useState("")
  const[amount, setAmount] = useState("")
  const[pin, setPin] = useState("")
  const handleClick = async() => {
    try {
        const{data} = await insuaranceService({policyHolder, amount: Number(amount), pin}) 
        toast.success(`Sent ₹${amount} to ${policyHolder}`)
        setPolicyHolder("")
        setAmount("")
    } catch (error) {
        console.error(error)
        toast.error("Insuarance Claim/Renewal failed")
    }
  }
  return (
    <div>
        <h2>Insuarance Services</h2>
        <input type="text" placeholder='Enter Policy Holder Name'  value={policyHolder} onChange={(e) => setPolicyHolder(e.target.value)}/>
        <input type="text" placeholder='Enter Amount'  value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <input type="password" placeholder='Enter Your Upi' value={pin} onChange={(e) => setPin(e.target.value)}/>
        <button onClick={handleClick}>Insuarance Policy</button>
    </div>
  )
}

export default Insuarance
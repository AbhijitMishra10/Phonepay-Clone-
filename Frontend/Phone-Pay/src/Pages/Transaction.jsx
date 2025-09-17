import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMoney } from '../services/apiHelper'
import { sendPayment } from '../Utils/transactionSlice'

function Transaction() {
  const [phone,setPhone] = useState("")
  const [amount,setAmount] = useState("")
  const dispatch = useDispatch()

  const handleSend = async () => {
    try {
      const {data} = await sendMoney({phone, amount: Number(amount)})
      dispatch(sendPayment(amount))
      alert(`Sent ₨ ${amount} to ${phone}`)
      setPhone("")
      setAmount("")
    } catch (error) {
      console.error(error)
      alert("Transaction Failed")
    }
  }
  return (
    <div>
      <h2>Send Money</h2>
      <input type="text" placeholder='Receiver Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type='Number' placeholder='Amount' value={amount} onChange={(e) => e.target.value}/>
      <button onClick={handleSend}>Click</button>
    </div>
  )
}

export default Transaction
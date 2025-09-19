import { useState } from "react";
import { payMerchant } from "../services/apiHelper";

function MerchantPay() {
    const[merchantId, setMerchantId] = useState("")
    const[amount, setAmount] = useState("")
    const[pin, setPin] = useState("")

    const handlePay = async () => {
        try {
            const { data } = await payMerchant({
                merchantId,
                amount: Number(amount),
                pin
            })
            alert(data.messsage)
            setMerchantId("")
            setAmount("")
            setPin("")
        } catch (err) {
            console.error(err)
            alert("Payment Failed")
        }
    }
    return(
    <div className="flex flex-col items-center mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-phonepe-purple">Pay Merchant</h2>
      <input
        type="text"
        placeholder="Merchant ID"
        value={merchantId}
        onChange={(e) => setMerchantId(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <input
        type="password"
        placeholder="Enter PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button
        onClick={handlePay}
        className="bg-phonepe-purple text-white px-4 py-2 rounded hover:bg-phonepe-dark">
        Pay
      </button>
    </div>
  )
}

export default MerchantPay
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchHistory } from "../services/apiHelper"
import { setTransactions } from "../Utils/transactionSlice"

function History() {
    const dispatch = useDispatch()
    const transactions = useSelector((state) => state.transaction.transactions)
    useEffect(() => {
        const getHistory = async() => {
            try {
                const {data} = await fetchHistory()
                dispatch(setTransactions(data))
            } catch (error) {
                console.error(error)
            }
        }
        getHistory()
    }, [dispatch])
    return(
        <div>
            <h2>Transaction History</h2>
            {transactions.length === 0 ? (
                <p>No transaction yet</p>
            ) : (
                <ul className="mt-4 space-y-3">
                    {transactions.map((tx) => (
                        <li
                        key={tx._id}
                        className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
                        >
                        <div>
                            {tx.type === "merchant" ? (
                            <p className="font-semibold">Paid Merchant: {tx.receiver?.shopName}</p>
                            ) : tx.type === "recharge" ? (
                            <p className="font-semibold">Mobile Recharge</p>
                            ) : tx.type === "bill" ? (
                            <p className="font-semibold">Bill Payment</p>
                            ) : (
                            <p className="font-semibold">
                                {tx.sender?.name} → {tx.receiver?.name}
                            </p>
                            )}
                            <p className="text-sm text-gray-500">{new Date(tx.date).toLocaleString()}</p>
                        </div>
                        <p className="font-bold text-phonepe-purple">₹{tx.amount}</p>
                        </li>
                    ))}
                    </ul>
            )}
        </div>
    )
}

export default History
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
                <ul>
                    {transactions.map((txt) => (
                        <li key={txt._id}>
                            {txt.sender?.userName} → {txt.receiver?.name} : ₹{txt.amount} ({txt.type})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default History
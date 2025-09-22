import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBalance } from '../Utils/transactionSlice.js'
import { fetchBalance } from '../services/apiHelper'
function Home() {
  const dispatch = useDispatch()
  const balance = useSelector((state) => state.transaction.balance)
  
  useEffect(() => {
    const getBalance = async() => {
      try {
        const { data } = await fetchBalance()
        dispatch(setBalance(data.balance))
      } catch (error) {
        console.error(err)
      }
    }
    getBalance()
  }, [dispatch])
 return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <Link to="/transaction">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
          <span className="text-3xl">💸</span>
          <h3 className="mt-2 font-bold">Send Money</h3>
        </div>
      </Link>

      <Link to="/recharge">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
          <span className="text-3xl">📱</span>
          <h3 className="mt-2 font-bold">Recharge</h3>
        </div>
      </Link>

      <Link to="/bill">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
          <span className="text-3xl">💡</span>
          <h3 className="mt-2 font-bold">Bill Pay</h3>
        </div>
      </Link>

      <Link to="/merchant">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
          <span className="text-3xl">🏪</span>
          <h3 className="mt-2 font-bold">Merchant Pay</h3>
        </div>
      </Link>
    </div>
  );
}

export default Home
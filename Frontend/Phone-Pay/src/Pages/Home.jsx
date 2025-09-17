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
    <div>
      <h1>Waller Ballance 💸: {balance}</h1>
    </div>
  )
}

export default Home
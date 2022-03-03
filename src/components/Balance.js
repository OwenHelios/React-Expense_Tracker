import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const balance = amounts.reduce((acc, item) => acc+item, 0)
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{balance < 0 && '-'}${Math.abs(balance).toFixed(2)}</h1>
    </>
  )
}

export default Balance
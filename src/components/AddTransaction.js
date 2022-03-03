import { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const {transactions, addTransaction} = useContext(GlobalContext)
  const idMax = transactions.reduce((acc,item) => Math.max(acc,item.id), 1)
  const onSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      id: idMax + 1,
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction Name</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter transaction name..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
          (use negative sign '-' for expense ) </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
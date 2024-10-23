import { useGetData } from "../hooks/useGetData"

const Transactions = () => {
  const data = useGetData()

  return (
    <div>
      <h2>Showing the lastests transactions..</h2>
      <ul>
        {data.map( transaction => {
          <li>ID: {transaction.id}</li>
          <li>Date: {transaction.date}</li>
          <li>Description: {transaction.description}</li>
          <li>Amount: {transaction.amount}</li>
        })}
      </ul>
    </div>
  )
}

export default Transactions
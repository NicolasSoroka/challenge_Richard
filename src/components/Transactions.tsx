import { useGetData } from "../hooks/useGetData"

const Transactions = () => {
  const data  = useGetData()

  return (
    <div>
      <h2>Mostrando las últimas transacciones...</h2>
      <ul>
        {data.map(transaction => (
          <li key={transaction.id}>
            <p>ID: {transaction.id}</p>
            <p>Fecha: {transaction.date.toLocaleDateString()}</p>
            <p>Descripción: {transaction.description}</p>
            <p>Monto: {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Transactions

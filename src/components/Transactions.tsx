import { useGetData } from "../hooks/useGetData";
import { Transaction } from "../types/types";

const Transactions = () => {
  const { transactions: data, loading, error } = useGetData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <ul>
        {data.map((transaction: Transaction) => (
          <li className="flex flex-col gap-2" key={transaction.id}>
            <p>ID: {transaction.id}</p>
            <p>Fecha: {new Date(transaction.date).toLocaleDateString()}</p>
            <p>Descripción: {transaction.description}</p>
            <p>Monto: {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;

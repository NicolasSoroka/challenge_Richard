import React, { useState } from "react";
import { useGetData } from "../hooks/useGetData";
import { Transaction } from "../types/types";

const Transactions = () => {
  const { transactions: data, loading, error } = useGetData();
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const filterTransactions = (transactions: Transaction[]) => {
    if (!startDate && !endDate) return transactions;

    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      if (start && end) {
        return transactionDate >= start && transactionDate <= end;
      } else if (start) {
        return transactionDate >= start;
      } else if (end) {
        return transactionDate <= end;
      }
      return true;
    });
  };

  const filteredData = filterTransactions(data);

  if (loading) {
    return <div>Cargando transacciones...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h2>Mostrando las últimas transacciones...</h2>

      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div>
          <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
            Fecha de inicio:
          </label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={handleStartDateChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
            Fecha de fin:
          </label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={handleEndDateChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>

      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((transaction: Transaction) => (
            <li className="flex flex-col gap-2 border-b border-gray-200 py-2" key={transaction.id}>
              <p>ID: {transaction.id}</p>
              <p>Fecha: {new Date(transaction.date).toLocaleDateString()}</p>
              <p>Descripción: {transaction.description}</p>
              <p>Monto: {transaction.amount}</p>
            </li>
          ))
        ) : (
          <li>No se encontraron transacciones en el rango de fechas seleccionado.</li>
        )}
      </ul>
    </div>
  );
};

export default Transactions;

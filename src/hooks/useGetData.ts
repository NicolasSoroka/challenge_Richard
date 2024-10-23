import { useEffect, useState } from "react";
import { transactions as mockTransactions } from "../mocks/fakeData";
import { Transaction } from "../types/types";

const FAKE_TIME_FOR_FETCHING = 2000;

export const useGetData = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching...");
        await new Promise(resolve => setTimeout(resolve, FAKE_TIME_FOR_FETCHING));
        setTransactions(mockTransactions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return transactions;
};

import { useEffect, useState } from "react";
import { transactions as mockTransactions } from "../mocks/fakeData";
import { Transaction } from "../types/types";

const FAKE_TIME_FOR_FETCHING = 2000;

export const useGetData = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching...");
        await new Promise((resolve) => setTimeout(resolve, FAKE_TIME_FOR_FETCHING));
        setTransactions(mockTransactions);
      } catch (err) {
        console.error(err);
        setError("There's a problem fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { transactions, loading, error };
};

import { useEffect, useState } from "react";
import { transactions } from "../mocks/fakeData";

const FAKE_TIME_FOR_FETCHING = 2000;

export const useGetData = async () => {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const data = await useGetData();
    setTransactions(data)
  }, [])

  try {
    setTimeout(() => {
      console.log("fetching...");
      return transactions;
    }, FAKE_TIME_FOR_FETCHING);

  } catch (error) {
    console.log(error);
    throw error;
  }
};

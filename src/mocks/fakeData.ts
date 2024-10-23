import { Transaction } from "../types/types";

export const transactions: Transaction[] = [
  {
    id: "1",
    date: new Date("2022-03-25"),
    description: "this is the first value of the transactions list.",
    amount: 1230,
  },
  {
    id: "2",
    date: new Date("3423-03-25"),
    description: "this is another value, the 2nd.",
    amount: 1230,
  },
  {
    id: "3",
    date: new Date("2411-03-25"),
    description: "the 3rd one...",
    amount: 1230,
  },
  {
    id: "4",
    date: new Date("2024-03-25"),
    description: "And finally, the 4th",
    amount: 1230,
  },
];

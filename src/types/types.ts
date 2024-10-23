export type Transaction = {
  id: string;
  date: Date;
  description?: string | null;
  amount: number;
}

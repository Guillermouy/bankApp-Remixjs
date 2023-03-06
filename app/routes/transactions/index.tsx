import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TransactionDTO } from "~/models/DTOs/transactionDTO";
import { GetTransactions } from "~/services/TransactionService";

import AuthContext from "../../context/AuthContext";

export default function TransactionsComponent() {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);

  const [error, setError] = useState("");
  const context = useContext(AuthContext);

  const GetTransactionsDB = async () => {
    try {
      const result: TransactionDTO[] = await GetTransactions();
      setTransactions(result);
    } catch (error) {
      console.log(error);
      setError("You must be logged in");
    }
  };

  return (
    <>
      <h1>Transactions</h1>
      <button onClick={GetTransactionsDB}>Get Transactions</button>
      <br />
      <br />
      <br />
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <li key={index}>
              - Transaction: {transaction.id} || Value: {transaction.value} ||{" "}
              Exchange: {transaction.exchangeValue} || Description:
              {transaction.description}
            </li>
          );
        })}
      </ul>
      <br />
      <p>{error}</p>
      <br />
    </>
  );
}

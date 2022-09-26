import { useState } from "react";
import "./totalMoney.css";

export const TotalMoney = ({ listTransactions }) => {
  const [balance, setBalance] = useState(0);

  console.log(listTransactions);

  // if (listTransactions.length) {
  //   const total = listTransactions.reduce((prev, current) => {
  //     return (current.money += prev);
  //   }, 0);
  //   // setBalance(total);
  //   // console.log(total);
  // }

  return listTransactions.length ? (
    <div className="total-money">
      <div className="total-value">
        <h3>Valor Total</h3>
        <h3 className="total">$ 1000</h3>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  ) : (
    <div className="total-money">
      <h3>Você ainda não possui nenhum lançamento</h3>
    </div>
  );
};

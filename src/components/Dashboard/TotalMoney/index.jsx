import { useState } from "react";
import "./totalMoney.css";

export const TotalMoney = ({ listTransactions }) => {
  // const [balance, setBalance] = useState(0);

  const total = listTransactions.reduce((a, b) => a + Number(b.money), 0);

  return listTransactions.length ? (
    <div className="total-money">
      <div className="total-value">
        <h3>Valor Total</h3>
        <h3 className="total">
          {total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h3>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  ) : (
    <div className="total-money">
      <h3>Você ainda não possui nenhum lançamento</h3>
    </div>
  );
};

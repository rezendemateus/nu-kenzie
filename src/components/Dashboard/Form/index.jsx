import { useState } from "react";
import "./form.css";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [newTransaction, setNewTransaction] = useState({
    money: 0,
    description: "",
    operation: "",
  });

  const onSubmit = (el) => {
    console.log(newTransaction);
    setListTransactions([...listTransactions, newTransaction]);
    setNewTransaction({ money: 0, description: "", operation: "" });
    console.log(newTransaction);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label for="description" className="description">
        Descrição
        <input
          type="text"
          value={newTransaction.description}
          name="description"
          placeholder="Digite aqui sua descrição"
          onChange={(el) =>
            setNewTransaction({
              ...newTransaction,
              description: el.target.value,
            })
          }
        ></input>
      </label>
      <span className="example">Ex: Compra de roupas</span>

      <div className="entry">
        <label for="value" className="value">
          Valor
          <input
            type="text"
            value={newTransaction.money}
            name="money"
            placeholder="valor"
            onChange={(el) =>
              setNewTransaction({
                ...newTransaction,
                money: el.target.value,
              })
            }
          ></input>
          <span>R$</span>
        </label>

        <label for="select-operation" className="operation">
          Tipo de valor
          <select
            className="select-operation"
            onChange={(el) =>
              setNewTransaction({
                ...newTransaction,
                operation: el.target.value,
              })
            }
            defaultValue="entrada"
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </label>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};

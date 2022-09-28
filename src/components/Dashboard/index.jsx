import { TotalMoney } from "./TotalMoney";
import { Form } from "./Form";
import { List } from "./List";
import { Logo } from "../SVGs/logo";
import "./Dashboard.css";
import { useState } from "react";

export const Dashboard = ({
  listTransactions,
  setListTransactions,
  setToken,
}) => {
  const [filter, setFilter] = useState("todos");

  return (
    <div className="dashboard">
      <header className="header">
        <div className="headerContent">
          <div className="logo">
            <Logo />
          </div>

          <button
            type="button"
            onClick={(el) => {
              el.preventDefault();
              window.confirm("Certeza?");
              setToken(false);
            }}
            className="sair"
          >
            Sair
          </button>
        </div>
      </header>

      <div className="container">
        <div className="transaction">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />

          <TotalMoney listTransactions={listTransactions} />
        </div>

        <div className="summary">
          <div className="summaryHeader">
            <h3>Resumo financeiro</h3>
            <div className="summaryButtons">
              <button
                type="button"
                name="todos"
                onClick={(el) => setFilter(el.target.name)}
              >
                Todos
              </button>
              <button
                type="button"
                name="entrada"
                onClick={(el) => setFilter(el.target.name)}
              >
                Entradas
              </button>
              <button
                type="button"
                name="saida"
                onClick={(el) => setFilter(el.target.name)}
              >
                Despesas
              </button>
            </div>
          </div>
          <List listTransactions={listTransactions} filter={filter} />
        </div>
      </div>
    </div>
  );
};

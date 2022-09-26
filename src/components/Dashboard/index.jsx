import { TotalMoney } from "./TotalMoney";
import { Form } from "./Form";
import { List } from "./List";
import { Logo } from "../SVGs/logo";
import "./Dashboard.css";

export const Dashboard = ({
  listTransactions,
  setListTransactions,
  setToken,
}) => {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">
          <Logo />
        </div>

        <button
          type="button"
          onClick={(el) => {
            el.preventDefault();
            setToken(false);
          }}
          className="sair"
        >
          Sair
        </button>
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
          <List listTransactions={listTransactions} />
        </div>
      </div>
    </div>
  );
};

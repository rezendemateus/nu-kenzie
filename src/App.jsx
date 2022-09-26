import { useState } from "react";
import "./App.css";
import { Form } from "./components/Dashboard/Form";
import { TotalMoney } from "./components/Dashboard/TotalMoney";
import { List } from "./components/Dashboard/List";
import { Logo } from "./components/SVGs/logo";
import { InitialPage } from "./components/InitialPage";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [token, setToken] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  return token ? (
    <>
      <Dashboard
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
        setToken={setToken}
      />
    </>
  ) : (
    <InitialPage token={token} setToken={setToken} />
  );
}

export default App;

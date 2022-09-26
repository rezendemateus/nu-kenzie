import { Illustration } from "../SVGs/Illustration";
import { LogoBranco } from "../SVGs/logo-branco";
import "./initialPage.css";

export const InitialPage = ({ token, setToken }) => {
  const handleToken = () => {
    console.log("funcionando");
    setToken(true);
    console.log(token);
  };
  return (
    <>
      <div className="initial-page">
        <div className="container">
          <div className="presentation">
            <LogoBranco />
            <h1 className="title-1">Centralize o controle das suas finanças</h1>
            <h3 className="headline">de forma rápida e segura</h3>
            <button type="button" className="enter" onClick={handleToken}>
              Entrar
            </button>
          </div>
          <div className="illustration">
            <Illustration />
          </div>
        </div>
      </div>
    </>
  );
};

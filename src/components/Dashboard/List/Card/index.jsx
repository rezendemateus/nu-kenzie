export const Card = ({ transaction }) => {
  console.log("ta entando");
  return (
    <li key={transaction.description} className="card-transaction">
      <div className="contentCard">
        <div className="descript">
          <h3>{transaction.description}</h3>
          <span>{transaction.operation}</span>
        </div>
        <span>
          {transaction.money.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className="remove">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export const Card = ({ transaction }) => {
  return (
    <li key={transaction.description} className="card-transaction">
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
      <button className="remove">remover</button>
    </li>
  );
};

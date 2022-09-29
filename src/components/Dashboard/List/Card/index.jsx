export const Card = ({ filteredList, transaction, id }) => {
  console.log(id);
  const remover = (id) => {
    const card = document.getElementById(id);
    card.remove();

    // const data = {
    //   money: transaction.money,
    //   description: transaction.description,
    //   operation: transaction.operation,
    // };

    // filteredList = filteredList.filter((transaction) => {
    //   return (
    //     transaction.money &&
    //     transaction.description &&
    //     transaction.operation !== data.money &&
    //     data &&
    //     data.operation
    //   );
    // });

    // console.log(transaction, filteredList);
    // // console.log(filteredList, data);
    // Card(listTransactions, transaction, id);

    // Card(filteredList, transaction, id);
  };
  return (
    <li
      key={transaction.description}
      id={id}
      className={
        transaction.operation === "entrada"
          ? "card-transaction-entrada"
          : "card-transaction"
      }
    >
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
        <button
          className="remove"
          id={transaction}
          onClick={(el) => {
            el.preventDefault();
            remover(id);
          }}
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

import { Card } from "./Card";
import "./list.css";

export const List = ({ listTransactions, filter }) => {
  console.log(listTransactions, filter);

  return (
    <>
      {listTransactions.length ? (
        <ul className="transactionsList">
          {listTransactions.map((transaction, index) => {
            return <Card key={index} transaction={transaction} />;
          })}
        </ul>
      ) : (
        <ul className="transactionsList">
          <li>
            <svg
              width="562"
              height="89"
              viewBox="0 0 562 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="562" height="87.3519" rx="4" fill="#F8F9FA" />
              <path
                d="M0 4C0 1.79087 1.80515 0 4.01429 0V87.3519C1.80515 87.3519 0 85.561 0 83.3519V4Z"
                fill="#E9ECEF"
              />
              <path
                d="M519.85 0H558C560.209 0 562 1.79086 562 4V85C562 87.2091 560.209 89 558 89H519.85V0Z"
                fill="#F8F9FA"
              />
              <rect
                x="15.0535"
                y="24.7222"
                width="330.175"
                height="13.1852"
                fill="#E9ECEF"
              />
              <rect
                x="15.0535"
                y="51.0925"
                width="76.2714"
                height="13.1852"
                fill="#E9ECEF"
              />
            </svg>
          </li>
          <li>
            <svg
              width="562"
              height="89"
              viewBox="0 0 562 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="562" height="87.3519" rx="4" fill="#F8F9FA" />
              <path
                d="M0 4C0 1.79087 1.80515 0 4.01429 0V87.3519C1.80515 87.3519 0 85.561 0 83.3519V4Z"
                fill="#E9ECEF"
              />
              <path
                d="M519.85 0H558C560.209 0 562 1.79086 562 4V85C562 87.2091 560.209 89 558 89H519.85V0Z"
                fill="#F8F9FA"
              />
              <rect
                x="15.0535"
                y="24.7222"
                width="330.175"
                height="13.1852"
                fill="#E9ECEF"
              />
              <rect
                x="15.0535"
                y="51.0925"
                width="76.2714"
                height="13.1852"
                fill="#E9ECEF"
              />
            </svg>
          </li>
          <li>
            <svg
              width="562"
              height="89"
              viewBox="0 0 562 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="562" height="87.3519" rx="4" fill="#F8F9FA" />
              <path
                d="M0 4C0 1.79087 1.80515 0 4.01429 0V87.3519C1.80515 87.3519 0 85.561 0 83.3519V4Z"
                fill="#E9ECEF"
              />
              <path
                d="M519.85 0H558C560.209 0 562 1.79086 562 4V85C562 87.2091 560.209 89 558 89H519.85V0Z"
                fill="#F8F9FA"
              />
              <rect
                x="15.0535"
                y="24.7222"
                width="330.175"
                height="13.1852"
                fill="#E9ECEF"
              />
              <rect
                x="15.0535"
                y="51.0925"
                width="76.2714"
                height="13.1852"
                fill="#E9ECEF"
              />
            </svg>
          </li>
        </ul>
      )}
    </>
  );

  // return (
  //   <>
  //     {listTransactions.length > 0 && filter !== "todos" ? (
  //       <ul className="transactions-list">
  //         {listTransactions.map((transaction, index) => {
  //           return (
  //             transaction.operation === filter && (
  //               <Card key={index} transaction={transaction} />
  //             )
  //           );
  //         })}
  //       </ul>
  //     ) : (
  //       listTransactions.length > 0 &&
  //       filter !==
  //         "todos"(
  //           <ul className="transactions-list">
  //             {listTransactions.map((transaction, index) => {
  //               return <Card key={index} transaction={transaction} />;
  //             })}
  //           </ul>
  //         )
  //     )}
  //   </>
  // );
};

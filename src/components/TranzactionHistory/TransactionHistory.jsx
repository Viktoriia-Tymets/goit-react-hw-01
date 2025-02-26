import transaction from "../../transactions.json";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({items}) {
  return (
      
  <table className={css.table}>
  <thead>
    <tr>
      <th className={css.tableLine}>Type</th>
      <th className={css.tableLine}>Amount</th>
      <th className={css.tableLine}>Currency</th>
    </tr>
  </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={      }>{type}</td>
            <td className={      }>{amount}</td>
            <td className={      }>{currency}</td>
          </tr>
        ))}
  </tbody>
      </table>
      
    )
}



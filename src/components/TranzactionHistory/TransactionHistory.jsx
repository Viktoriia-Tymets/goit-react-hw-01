import transaction from "../../transactions.json";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({items}) {
  return (
      
  <table className={css.table}>
  <thead>
    <tr>
      <th className={css.tableMainLine}>Type</th>
      <th className={css.tableMainLine}>Amount</th>
      <th className={css.tableMainLine}>Currency</th>
    </tr>
  </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.line} key={id}>
            <td className={css.tableLine}>{type}</td>
            <td className={css.tableLine}>{amount}</td>
            <td className={css.tableLine}>{currency}</td>
          </tr>
        ))}
  </tbody>
      </table>
      
    )
}



import { TbodyItems } from "./TbodyItems/TbodyItems";
import { Thead } from "./Thead/Thead";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <Thead />
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <TbodyItems item={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

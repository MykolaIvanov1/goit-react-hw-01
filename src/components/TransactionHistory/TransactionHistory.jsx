import { TbodyItems } from "./TbodyItems/TbodyItems";
import { Thead } from "./Thead/Thead";

export const TransactionHistory = ({ items }) => {
  return (
    <table className='transaction-history'>
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

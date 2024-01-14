import css from "./Thead.module.css";

export const Thead = () => {
  return (
    <thead className={css.thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};

import css from "./Stats.module.css";

export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <ul className={css.stats}>
      <li className={css.item}>
        <span className={css.label}>Followers</span>
        <span className={css.value}>{followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Views</span>
        <span className={css.value}>{views}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Likes</span>
        <span className={css.value}>{likes}</span>
      </li>
    </ul>
  );
};

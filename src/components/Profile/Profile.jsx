import { Stats } from "./Stats/Stats";
import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={css.description}>
        <img src={image} alt='User avatar' className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
        <Stats stats={stats} />
      </div>
    </>
  );
};

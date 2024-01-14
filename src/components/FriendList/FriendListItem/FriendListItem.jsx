import css from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const FriendStatus = clsx("status", {
    [css.online]: isOnline,
    [css.ofline]: !isOnline,
  });
  return (
    <div className={css.item}>
      <img className='avatar' src={avatar} alt='Avatar' width='48' />
      <p className='name'>{name}</p>
      <p>
        Friend status:{" "}
        <span className={FriendStatus}>{isOnline ? "Online" : " Offline"}</span>
      </p>
    </div>
  );
};

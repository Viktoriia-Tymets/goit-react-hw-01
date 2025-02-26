import clsx from "clsx";
import css from "./FriendListItem.module.css";


export default function FriendListItem({avatar, name, isOnline}) {

const statusClsx = clsx(css.status, isOnline ? css.online : css.offline);

    return (
    <div className={css.card}>
  <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
  <p className={css.name}>{name}</p>
  <p className={css.status}>{isOnline ? "Online" : "Offline"}</p>
</div>
)
}
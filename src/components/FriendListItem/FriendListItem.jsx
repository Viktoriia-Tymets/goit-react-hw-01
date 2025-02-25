import clsx from "clsx";
import friend from "../../friends.json";


export default function FriendListItem({
    friend: {avatar, name, isOnline}
}) {

const statusClsx = clsx(css.text, isOnline ? css.online : css.offline);

    return (
    <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p>{isOnline}</p>
</div>
)
}
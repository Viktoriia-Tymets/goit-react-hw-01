import clsx from "clsx";
import friends from "../../friends.json";


export default function FriendListItem({
    friend: {avatar, name, isOnline}
}) {

const statusClsx = clsx(css.text, isOnline ? css.online : css.offline);

    return (
    <div>
  <img src={friends.avatar} alt="Avatar" width="48" />
  <p>{friends.name}</p>
  <p>{friends.isOnline}</p>
</div>
)
}
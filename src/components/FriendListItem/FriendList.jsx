import FriendListItem from "./FriendListItem";
import css from "./FriendListItem.module.css";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}   
</ul>
    )
}
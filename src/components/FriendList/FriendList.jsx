import FriendListItem from "./FriendListItem";

export default function FriendList({ items }) {
    return (
        <ul className={css.list}>
            {items.map((friends) => (
                <li key={friends.id} className={css.item}>
        </li>
        ))}   
</ul>
    )
}
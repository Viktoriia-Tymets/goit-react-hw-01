import React from "react";
import UserProfile from "./Profile";
import userData from "../userData.json"
import friends from "../friends.json";
import FriendList from "./FriendList/FriendList";
import FriendListItem from "./FriendList/FriendListItem";
import styles from "./FriendListItem.module.css"


export default function App() {
  return (
    <>
     <UserProfile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}







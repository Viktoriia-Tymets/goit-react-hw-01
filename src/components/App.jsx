import React from "react";
import UserProfile from "./Profile/Profile";
import userData from "../userData.json"
import friends from "../friends.json";
import FriendList from "./FriendListItem/FriendList";
import TransactionHistory from "./TranzactionHistory/TransactionHistory";
import transactions from "../transactions.json";



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
      <TransactionHistory items={transactions} />
    </>
  );
}







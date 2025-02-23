import Profile from "./Profile";
import userData from "../userData.json";


export default function App() {
  return (
    <>
     <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}
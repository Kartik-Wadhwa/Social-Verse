import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import Slider from "../slider/Slider";

export default function Rightbar() {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Earn Rewards</b> on Donations and live campaigns.
          </span>
        </div>
        <Slider/>
        <h4 className="rightbarTitle">People and ORG's you follow</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
         <HomeRightbar />
      </div>
    </div>
  );
}
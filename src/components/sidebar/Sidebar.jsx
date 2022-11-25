import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  WorkOutline,
  Event,
} from "@mui/icons-material";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            
            <li className="sidebarListItem">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">NGO Connect</span>
            </li>
            <li className="sidebarListItem">
              <CleaningServicesIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Clean up</span>
            </li>
            <li className="sidebarListItem">
              <FoodBankIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Food For Poor</span>
            </li>
            <li className="sidebarListItem">
              <VolunteerActivismIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Donate</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Live Campaigns</span>
            </li>
            <li className="sidebarListItem">
              <ShoppingBagIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Shopping</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
        </div>
      </div>
    );
  }
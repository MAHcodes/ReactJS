import { HiHashtag } from "react-icons/hi";
import { BsTwitter, BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import {
  RiHome7Fill,
  RiNotification2Line,
  RiNotification2Fill,
} from "react-icons/ri";
import { MdOutlineEmail, MdEmail } from "react-icons/md";
import NavLink from "./NavLink";
import { CgList, CgMoreO } from "react-icons/cg";
import { FaUser, FaRegUser } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import Account from "./Account";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <NavLink Icon={BsTwitter} route="" />
        <NavLink Icon={RiHome7Fill} route="home" title="Home" />
        <NavLink Icon={HiHashtag} route="explore" title="Explore" />
        <NavLink
          Icon={RiNotification2Line}
          route="notifications"
          title="Notifications"
        />
        <NavLink Icon={MdOutlineEmail} route="messages" title="Messages" />
        <NavLink Icon={BsBookmark} route="bookmarks" title="Bookmarks" />
        <NavLink Icon={CgList} route="lists" title="Lists" />
        <NavLink Icon={FaRegUser} route="profile" title="Profile" />
        <NavLink Icon={CgMoreO} route="more" title="More" />
        <button className={styles.tweetBtn}>Tweet</button>
      </div>
      <Account />
    </div>
  );
};

export default Sidebar;

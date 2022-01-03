import {
  HiDotsCircleHorizontal,
  HiHashtag,
  HiOutlineHashtag,
} from "react-icons/hi";
import { BsTwitter, BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import {
  RiHome7Fill,
  RiNotification2Line,
  RiNotification2Fill,
  RiHome7Line,
} from "react-icons/ri";
import { MdOutlineEmail, MdEmail } from "react-icons/md";
import NavbarLink from "./NavbarLink";
import { CgList, CgMoreO } from "react-icons/cg";
import { FaUser, FaRegUser, FaListAlt } from "react-icons/fa";
import styles from "./LeftSidebar.module.css";
import Account from "./Account";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <NavbarLink Icon={BsTwitter} IconFilled={BsTwitter} route="" />
        <NavbarLink
          Icon={RiHome7Line}
          IconFilled={RiHome7Fill}
          route="home"
          title="Home"
        />
        <NavbarLink
          Icon={HiOutlineHashtag}
          IconFilled={HiHashtag}
          route="explore"
          title="Explore"
        />
        <NavbarLink
          Icon={RiNotification2Line}
          IconFilled={RiNotification2Fill}
          route="notifications"
          title="Notifications"
        />
        <NavbarLink
          Icon={MdOutlineEmail}
          IconFilled={MdEmail}
          route="messages"
          title="Messages"
        />
        <NavbarLink
          Icon={BsBookmark}
          IconFilled={BsFillBookmarkFill}
          route="bookmarks"
          title="Bookmarks"
        />
        <NavbarLink
          Icon={CgList}
          IconFilled={FaListAlt}
          route="lists"
          title="Lists"
        />
        <NavbarLink
          Icon={FaRegUser}
          IconFilled={FaUser}
          route="profile"
          title="Profile"
        />
        <NavbarLink
          Icon={CgMoreO}
          IconFilled={HiDotsCircleHorizontal}
          route="more"
          title="More"
        />
        <button className={styles.tweetBtn}>Tweet</button>
      </div>
      <Account />
    </div>
  );
};

export default Sidebar;

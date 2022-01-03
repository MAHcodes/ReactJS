import styles from "./Feed.module.css";
import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Explore from "../routes/Explore";
import Notifications from "../routes/Notifications";
import Messages from "../routes/Messages";
import Bookmarks from "../routes/Bookmarks";
import Lists from "../routes/Lists";
import Profile from "../routes/Profile";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Feed;

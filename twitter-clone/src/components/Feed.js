import styles from "./Feed.module.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../routes/Home";
import Explore from "../routes/Explore";
import Notifications from "../routes/Notifications";
import Messages from "../routes/Messages";
import Bookmarks from "../routes/Bookmarks";
import Lists from "../routes/Lists";
import Profile from "../routes/Profile";
import * as ROUTES from "../routes/routes";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <Routes>
        <Route path="/*" element={<Navigate replace to={ROUTES.HOME} />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.EXPLORE} element={<Explore />} />
        <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />} />
        <Route path={ROUTES.MESSAGES} element={<Messages />} />
        <Route path={ROUTES.BOOKMARKS} element={<Bookmarks />} />
        <Route path={ROUTES.LISTS} element={<Lists />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Feed;

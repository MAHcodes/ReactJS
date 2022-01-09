import { useContext, useState } from "react";
import { UserContext } from "../hooks/UserContext";
import Avatar from "./Avatar";
import styles from "./Tweet.module.css";
import { IoImageOutline } from "react-icons/io5";
import { RiFileGifLine } from "react-icons/ri";
import { BiPoll } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import TweetBtn from "./TweetBtn";

const Tweet = () => {
  const { user } = useContext(UserContext);
  const [tweetText, setTweetText] = useState("");

  return (
    <div className={styles.tweetBox}>
      <div className={styles.avatar}>
        <Avatar url={user.profile} uname={user.username} />
      </div>
      <div className={styles.more}>
        <input
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
          type="text"
          placeholder="What's happening?"
        />
        <div className={styles.opts}>
          <div className={styles.icons}>
            <IoImageOutline />
            <RiFileGifLine />
            <BiPoll />
            <FiSmile />
            <AiOutlineSchedule />
            <HiOutlineLocationMarker />
          </div>
          <TweetBtn tweetText={tweetText} />
        </div>
      </div>
    </div>
  );
};

export default Tweet;

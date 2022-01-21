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
import { db } from "../firebase";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";

const Tweet = () => {
  const { user } = useContext(UserContext);
  const [tweetText, setTweetText] = useState("");

  const handleTweet = (e) => {
    e.preventDefault();
    console.log(tweetText);
    console.log(user);
    const docRef = doc(db, "users", user.uid);

    updateDoc(docRef, {
      posts: arrayUnion({
        postText: tweetText,
        timeStamp: 12,
      }),
    }).then(() => {
      setTweetText("");
    });
  };

  return (
    <form onSubmit={handleTweet} className={styles.tweetBox}>
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
    </form>
  );
};

export default Tweet;

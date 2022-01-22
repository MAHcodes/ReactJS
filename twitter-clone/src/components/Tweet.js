import { useContext, useRef, useState } from "react";
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
import {
  doc,
  arrayUnion,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { CgClose } from "react-icons/cg";
import Loading from "./Loading";
import GiphyGrid from "./GiphyGrid";

const Tweet = () => {
  const { user } = useContext(UserContext);
  const [tweetText, setTweetText] = useState("");
  const [media, setMedia] = useState("");
  const [mediaLoading, setMediaLoading] = useState(false);
  const [mediaError, setMediaError] = useState("");
  const docRef = doc(db, "posts", user.uid);
  const imgRef = useRef(null);
  const [gifShow, setGifShow] = useState(false);

  const handleTweet = (e) => {
    e.preventDefault();
    updateDoc(docRef, {
      posts: arrayUnion({
        postText: tweetText,
        media,
        timeStamp: 12,
        replies: [],
        retweets: 0,
        likes: 0,
        created: serverTimestamp(),
      }),
    }).then(() => {
      setTweetText("");
    });
  };

  const uploadImage = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `images/${file.lastModified}_${file.name}`);
    setMediaLoading(true);
    uploadBytes(storageRef, file)
      .then(() => {
        getDownloadURL(storageRef)
          .then((url) => {
            setMedia(url);
          })
          .catch((err) => {
            setMediaError(err.message);
          });
      })
      .catch((err) => {
        setMediaError(err.message);
      })
      .finally(() => {
        setMediaLoading(false);
      });
  };

  const toggleGif = () => {
    setGifShow(!gifShow);
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
        {mediaLoading ? (
          <Loading />
        ) : mediaError ? (
          <p style={{ color: "rgb(var(--error))" }}>{mediaError}</p>
        ) : (
          media && (
            <div className={styles.media}>
              <img src={media} alt={media} className={styles.media} />
              <button
                onClick={() => setMedia("")}
                className="removeBtn"
                title="Remove"
              >
                <CgClose />
              </button>
            </div>
          )
        )}
        <div className={styles.opts}>
          <div className={styles.icons}>
            <input
              onInput={(e) => {
                uploadImage(e.nativeEvent.target.files[0]);
              }}
              ref={imgRef}
              type="file"
              name="image"
              id="img"
              hidden
              accept="image/*"
            />
            <label htmlFor="img">
              <IoImageOutline />
            </label>
            <div onClick={toggleGif}>
              <RiFileGifLine style={{ pointerEvents: "none" }} />
            </div>
            {gifShow && (
              <GiphyGrid setMedia={setMedia} setGifShow={setGifShow} />
            )}
            {gifShow && (
              <div
                style={{ backgroundColor: "rgb(var(--overlay))" }}
                className="overlay"
                onClick={() => setGifShow(false)}
              ></div>
            )}
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

import styles from "./TweetBtn.module.css";

const TweetBtn = ({ tweetText = true }) => {
  return (
    <button disabled={!tweetText ? true : ""} className={styles.tweetBtn}>
      Tweet
    </button>
  );
};

export default TweetBtn;

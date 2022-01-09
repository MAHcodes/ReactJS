import styles from "./Avatar.module.css";

const Avatar = ({ url, uname }) => {
  return (
    <div className={styles.profile}>
      <img
        src={
          url ||
          `https://avatars.dicebear.com/api/initials/${uname}.svg?backgroundColors[]=lightBlue`
        }
        alt={uname}
      />
    </div>
  );
};

export default Avatar;

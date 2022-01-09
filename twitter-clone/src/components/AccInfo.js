import Avatar from "./Avatar";
import styles from "./Account.module.css";

const AccInfo = ({ hov, Icon, clr, action, user, uname }) => {
  return (
    <div className={`${styles.wrapper} ${hov && styles.hov}`} onClick={action}>
      <div>
        <Avatar url={user.profile} uname={user.username} />
      </div>
      <div className={styles.username}>
        <p className={styles.name}>{user.username}</p>
        <p className={styles.uname}>{uname}</p>
      </div>
      <Icon className={styles.icon} style={{ color: clr }} />
    </div>
  );
};

export default AccInfo;

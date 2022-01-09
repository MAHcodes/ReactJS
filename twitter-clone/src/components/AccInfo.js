import Avatar from "./Avatar";
import styles from "./Account.module.css";
import { UserContext } from "../hooks/UserContext";
import { useContext } from "react";

const AccInfo = ({ hov, Icon, clr, action }) => {
  const { user } = useContext(UserContext);
  const generateUname = (name) => {
    return name && `@${name.split(" ").join("").toLowerCase()}`;
  };

  return (
    <div className={`${styles.wrapper} ${hov && styles.hov}`} onClick={action}>
      <div>
        <Avatar url={user.profile} uname={user.username} />
      </div>
      <div className={styles.username}>
        <p className={styles.name}>{user.username}</p>
        <p className={styles.uname}>{generateUname(user.username)}</p>
      </div>
      <Icon className={styles.icon} style={{ color: clr }} />
    </div>
  );
};

export default AccInfo;

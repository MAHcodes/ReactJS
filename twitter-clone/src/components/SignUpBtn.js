import styles from "./SignUpBtn.module.css";
import { useContext } from "react";
import { UserContext } from "../hooks/UserContext";

const SignUpBtn = ({ Icon, text, bgColor, color, border, bold, action }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <button
      className={`${styles.btn} ${border && styles.brdr} ${bold && styles.bld}`}
      style={{ backgroundColor: bgColor, color }}
      onClick={() => {
        action()
          .then((res) => {
            const userInfo = {
              username: res.user.displayName,
              email: res.user.email,
              profile: res.user.photoURL,
            };
            setUser(userInfo);
            console.log(userInfo);
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {Icon && <Icon className={styles.icon} />}
      {text}
    </button>
  );
};

export default SignUpBtn;

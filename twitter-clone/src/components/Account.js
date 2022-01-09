import { BsThreeDots } from "react-icons/bs";
import { MdOutlineCheck } from "react-icons/md";
import { useState } from "react";
import AccInfo from "./AccInfo";
import styles from "./Account.module.css";
import { UserContext } from "../hooks/UserContext";
import { useContext } from "react";

const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const [isOpened, setIsOpened] = useState(false);

  const generateUname = (name) => {
    return name && `@${name.split(" ").join("").toLowerCase()}`;
  };

  const logout = () => {
    setUser(null);
    //localStorage.removeItem("twitter-clone");
  };

  return (
    <>
      {isOpened && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpened(false)}
        ></div>
      )}
      <div className={styles.rel}>
        {isOpened && (
          <div className={styles.more}>
            <AccInfo
              user={user}
              Icon={MdOutlineCheck}
              clr="rgb(var(--accent-color))"
              uname={generateUname(user.username)}
            />
            <ul className={styles.logout}>
              <li>Add existing account</li>
              <li onClick={logout}>Log out {generateUname(user.username)}</li>
            </ul>
          </div>
        )}
        <AccInfo
          hov
          Icon={BsThreeDots}
          action={() => {
            setIsOpened(!isOpened);
          }}
          user={user}
          uname={generateUname(user.username)}
        />
      </div>
    </>
  );
};

export default Account;

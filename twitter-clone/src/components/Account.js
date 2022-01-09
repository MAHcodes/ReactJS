import { BsThreeDots } from "react-icons/bs";
import { MdOutlineCheck } from "react-icons/md";
import { useState } from "react";
import AccInfo from "./AccInfo";
import styles from "./Account.module.css";

const Account = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.rel}>
      {isOpened && (
        <div className={styles.more}>
          <AccInfo Icon={MdOutlineCheck} clr="rgb(var(--accent-color))" />
        </div>
      )}
      <AccInfo
        hov
        Icon={BsThreeDots}
        action={() => {
          setIsOpened(!isOpened);
        }}
      />
    </div>
  );
};

export default Account;

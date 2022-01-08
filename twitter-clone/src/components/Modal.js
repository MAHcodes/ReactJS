import styles from "./Modal.module.css";
import { BsTwitter } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import SignIn from "./SignIn";
import EmailSignUp from "./EmailSignUp";

const Modal = ({ modal, setModal }) => {
  return (
    <>
      <div className={styles.modal}>
        <IoCloseOutline
          className={styles.close}
          onClick={() => setModal(false)}
          title="close"
        />
        <BsTwitter className={styles.logo} />
        {modal === "EMAIL_SIGNUP" ? <EmailSignUp /> : <SignIn />}
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};

export default Modal;

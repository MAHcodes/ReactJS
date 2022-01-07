import styles from "./Modal.module.css";
import { BsTwitter } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

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
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};

export default Modal;

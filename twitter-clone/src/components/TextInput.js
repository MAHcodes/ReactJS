import styles from "./TextInput.module.css";

const TextInput = ({ title, type, classes, err }) => {
  return (
    <div>
      <div className={`${classes} ${err && styles.errBox}`}>
        <input required placeholder=" " type={type} id={`${title}_id`} />
        <div className={`${styles.title} ${err && styles.error}`}>
          <label htmlFor={`${title}_id`}>{title}</label>
        </div>
      </div>
      {err && <p className={styles.errMsg}>{err}</p>}
    </div>
  );
};

export default TextInput;

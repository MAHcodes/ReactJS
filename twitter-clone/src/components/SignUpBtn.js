import styles from "./SignUpBtn.module.css";

const SignUpBtn = ({
  Icon,
  text,
  bgColor,
  color,
  border,
  bold,
  action,
  error,
}) => {
  return (
    <button
      className={`${styles.btn} ${border && styles.brdr} ${bold && styles.bld}`}
      style={{ backgroundColor: bgColor, color }}
      onClick={action}
      disabled={error ? "disabled" : ""}
    >
      {Icon && <Icon className={styles.icon} />}
      {text}
    </button>
  );
};

export default SignUpBtn;

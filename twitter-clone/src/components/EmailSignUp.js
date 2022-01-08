import styles from "./EmailSignUp.module.css";
import TextInput from "./TextInput";

const EmailSignUp = () => {
  return (
    <div>
      <h2>Create your account</h2>
      <form>
        <TextInput
          type="email"
          classes={`${styles.email} ${styles.input}`}
          title="Name"
        />
        <TextInput
          type="password"
          classes={`${styles.pass} ${styles.input}`}
          title="Password"
        />
      </form>
    </div>
  );
};

export default EmailSignUp;

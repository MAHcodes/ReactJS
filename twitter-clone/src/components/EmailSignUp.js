import styles from "./EmailSignUp.module.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Select from "./Select";
import { dates } from "../assets/dates";

const EmailSignUp = () => {
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const validateEmail = (e) => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(e.target.value) && e.target.value.length) {
      setEmailErr("Please enter a valid email.");
    } else {
      setEmailErr("");
    }
  };
  const validatePass = (e) => {
    if (e.target.value.length && e.target.value.length < 6) {
      setPassErr("Password must be 6 characters at least.");
    } else {
      setPassErr("");
    }
  };
  return (
    <div>
      <h2 className={styles.title}>Create your account</h2>
      <form>
        <TextInput
          type="email"
          classes={`${styles.email} ${styles.input}`}
          title="Email"
          err={emailErr}
          validate={validateEmail}
        />
        <TextInput
          type="password"
          classes={`${styles.pass} ${styles.input}`}
          title="Password"
          err={passErr}
          validate={validatePass}
        />
      </form>

      <div>
        <h2 className={styles.subtitle}>Date of birth</h2>
        <p>
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
        <div className="selections">
          <Select title="Month" options={dates.months} />
          <Select title="Day" options={dates.days} />
          <Select title="Year" options={dates.years} />
        </div>
      </div>
    </div>
  );
};

export default EmailSignUp;

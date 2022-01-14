import styles from "./EmailSignUp.module.css";
import TextInput from "./TextInput";
import { useRef, useState, useContext } from "react";
import { UserContext } from "../hooks/UserContext";
import Select from "./Select";
import { dates } from "../assets/dates";
import SignUpBtn from "./SignUpBtn";
import { signInWithEmail } from "../firebase";

const EmailSignUp = () => {
  const { setUser } = useContext(UserContext);
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);
  const [nameErr, setNameErr] = useState(null);
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  const signUpIsValid = () => {
    return (
      !emailErr &&
      !passErr &&
      !nameErr &&
      emailInput.length > 0 &&
      nameInput.length >= 3 &&
      passInput.length >= 6
    );
  };

  const signUp = () => {
    if (signUpIsValid()) {
      signInWithEmail(emailInput, passInput)
        .then((user) => {
          console.log(user);
          const userInfo = {
            uid: user.user.uid,
            username: user.user.displayName || nameInput,
            email: user.user.email,
            profile: user.user.photoURL,
          };
          setUser(userInfo);
          localStorage.setItem("twitter-clone", JSON.stringify(userInfo));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validateEmail = (e) => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(e.target.value) && e.target.value.length) {
      setEmailErr("Please enter a valid email.");
    } else {
      setEmailErr(null);
    }
  };
  const validatePass = (e) => {
    if (e.target.value.length && e.target.value.length < 6) {
      setPassErr("Password must be 6 characters at least.");
    } else {
      setPassErr(null);
    }
  };
  const validateName = (e) => {
    if (e.target.value.length && e.target.value.length < 3) {
      setNameErr("Name must be 3 characters at least.");
    } else {
      setNameErr(null);
    }
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Create your account</h2>
      <form>
        <TextInput
          type="text"
          classes={`${styles.name} ${styles.input}`}
          title="Name"
          err={nameErr}
          validate={validateName}
          inputValue={nameInput}
          setInputValue={setNameInput}
        />
        <TextInput
          type="email"
          classes={`${styles.email} ${styles.input}`}
          title="Email"
          err={emailErr}
          validate={validateEmail}
          inputValue={emailInput}
          setInputValue={setEmailInput}
        />
        <TextInput
          type="password"
          classes={`${styles.pass} ${styles.input}`}
          title="Password"
          err={passErr}
          validate={validatePass}
          inputValue={passInput}
          setInputValue={setPassInput}
        />
      </form>

      <div className={styles.dob}>
        <h2 className={styles.subtitle}>Date of birth</h2>
        <p>
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
        <div className={styles.selectBox}>
          <Select title="Month" options={dates.months} />
          <Select title="Day" options={dates.days} />
          <Select title="Year" options={dates.years} />
        </div>
      </div>
      <div style={{ inset: "auto  2rem 1.5rem 2rem ", position: "absolute" }}>
        <SignUpBtn
          text="Sign Up"
          bgColor="#fff"
          bold
          color="#000"
          action={signUp}
          error={!signUpIsValid()}
        />
      </div>
    </div>
  );
};

export default EmailSignUp;

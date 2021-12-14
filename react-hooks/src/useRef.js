import { useRef } from "react";

const Ref = () => {
  const userNameInput = useRef(null);
  const userNameTitle = useRef(null);
  let userName = null;

  const updateUserName = (e) => {
    e.preventDefault();
    userName = userNameInput.current.value;
    userNameTitle.current.innerText = `Your name is: ${userName}`;
    userNameInput.current.value = "";
  };

  return (
    <form onSubmit={updateUserName}>
      <h1 ref={userNameTitle}>{userName || "Submit Your Name"}</h1>
      <input type="text" ref={userNameInput} required placeholder="Username" />
      <input type="submit" />
    </form>
  );
};

export default Ref;

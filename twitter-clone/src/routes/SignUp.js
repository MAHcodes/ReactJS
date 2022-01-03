import { useContext } from "react";
import { UserContext } from "../hooks/UserContext";

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  //const twitterBg =
  //"https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png";
  return <div>SignUp {user}</div>;
};

export default SignUp;

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MoviesContainer from "../components/MoviesContainer";
import Sidebar from "../components/Sidebar";
import classes from "./Home.module.css";

const Home = ({ username }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!username) {
      navigate("/profile");
    } else {
    }
  }, [username, navigate]);

  return (
    <div className={`${classes.container}`}>
      <Sidebar username={username} />
      <div className={"main"}>
        <MoviesContainer title="Top 250 Movie" />
        <MoviesContainer title="Top 250 Movie" />
      </div>
    </div>
  );
};

export default Home;

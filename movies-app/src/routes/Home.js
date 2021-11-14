import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MoviesContainer from "../components/MoviesContainer";
import Sidebar from "../components/Sidebar";
import classes from "./Home.module.css";
import endpoints from "../api/endpoints";
import Header from "../components/Header";

const Home = ({ username, avatarType }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!username) {
      navigate("/profile");
    } else {
    }
  }, [username, navigate]);

  return (
    <>
      <Header username={username} avatarType={avatarType} />
      <div className={`${classes.container}`}>
        <Sidebar username={username} />
        <div className={classes.main}>
          <MoviesContainer
            title="Top 250 Movie"
            endpoint={endpoints.top250movie}
          />
          <MoviesContainer title="Top 250 TV's" endpoint={endpoints.top250tv} />
          <MoviesContainer
            title="Most Popular Movies"
            endpoint={endpoints.mostPopularMovies}
          />
          <MoviesContainer
            title="Most Popular TV's"
            endpoint={endpoints.mostPopularTvs}
          />
          <MoviesContainer
            title="In Theaters"
            endpoint={endpoints.inTheaters}
          />
          <MoviesContainer
            title="Coming Soon"
            endpoint={endpoints.comingSoon}
          />
        </div>
      </div>
    </>
  );
};

export default Home;

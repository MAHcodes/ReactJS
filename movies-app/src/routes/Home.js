import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MoviesRow from "../components/MoviesRow";
import Sidebar from "../components/Sidebar";
import classes from "./Home.module.css";

const Home = ({username}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!username) {
            navigate("/profile");
        } else {

        }
    }, [username, navigate])
    return <div className={`${classes.container}`}>
        <Sidebar username={username} />
        <div className={"main"}>
            <MoviesRow title="Top 250 Movie" />
            <MoviesRow title="Top 250 Movie" />
        </div>
    </div>
    
}

export default Home;
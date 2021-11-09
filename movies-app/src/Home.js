import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MoviesRow from "./MoviesRow";
import Sidebar from "./Sidebar";
import classes from "./Home.module.css";

const Home = ({username}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!username) {
            navigate("/login");
        } else {

        }
    }, [username, navigate])
    return <div className={`${classes.container}`}>
        <Sidebar />
        <div className={"main"}>
            <MoviesRow title="Top 250 Movie" />
            <MoviesRow title="Top 250 Movie" />
        </div>
    </div>
    
}

export default Home;
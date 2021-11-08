import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MoviesRow from "./MoviesRow";

const Home = ({username}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!username) {
            navigate("/login");
        } else {

        }
    }, [])
    return <div className="main">
        <MoviesRow title="Top 250 Movie" />
    </div>
    
}

export default Home;
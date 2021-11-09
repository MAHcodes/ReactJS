import { useEffect, useState } from "react/cjs/react.development";
import endpointJson from "./top250movie.json";
import { Link } from "react-router-dom";

const MoviesRow = ({title}) => {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        setMovies(endpointJson.items);
    }, [])


    return <div className="row">
        <h3>{title}</h3>
        <div className="moviesRow">
            {movies.map(item => (
                <div key={item.id} className="poster">
                    <Link to={`/${item.id}`}>
                        <img loading="lazy" src={item.image} alt={item.fullTitle}  />
                    <div className="info">
                        <p>{item.fullTitle}</p>
                        <span>
                            <p style={{fontSize: ".75em"}}>Rank: {item.rank}</p>
                            <p style={{fontSize: ".75em"}}>IMDB Rating: {item.imDbRating}</p>
                        </span>
                    </div>
                    </Link>
                </div>
            ))
            }
        </div>
    </div>
}

export default MoviesRow;
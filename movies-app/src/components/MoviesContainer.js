import { useEffect, useState } from "react/cjs/react.development";
import endpointJson from "../assets/top250movie.json";
import MoviesRow from "./MoviesRow";

const MoviesContainer = ({ title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(endpointJson.items);
  }, []);

  return <MoviesRow moviesArray={movies} title={title} />;
};

export default MoviesContainer;

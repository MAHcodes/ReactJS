import { useEffect, useState } from "react";
import endpointJson from "../assets/top250movie.json";
import MoviesRow from "./MoviesRow";
import axios from "../api/request";

const MoviesContainer = ({ title, endpoint, more }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      setMovies(res.data.items.slice(0, 20));
    });
    setMovies(endpointJson.items);
  }, [endpoint]);

  return (
    <MoviesRow
      style={{ marginBottom: "3rem" }}
      moviesArray={movies}
      title={title}
      more={more}
      endpoint={endpoint}
    />
  );
};

export default MoviesContainer;

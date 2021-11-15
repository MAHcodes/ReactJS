import MoviesRow from "../components/MoviesRow";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "../api/request";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import classes from "../routes/People.module.css";

const Search = ({ username, avatarType }) => {
  const { title } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchURL = `Search/${API_KEY}/${title}`;
    console.log(title);
    async function fetchData() {
      const res = await axios.get(fetchURL);
      console.log(res);
      setSearchData(res.data.results);
      console.log(searchData);
      setIsLoading(false);
    }
    fetchData();
  }, [API_KEY, title]);

  return (
    <>
      <Header username={username} avatarType={avatarType} />
      <div className={classes.container}>
        <Sidebar />
        {isLoading ? (
          <Loading />
        ) : (
          <div className={classes.overflow}>
            <MoviesRow
              more={false}
              title={`${title} Results:`}
              moviesArray={searchData}
            />
          </div>
        )}
        ;
      </div>
    </>
  );
};

export default Search;

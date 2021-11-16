import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "../api/request";
import All from "./All";

const Search = ({ username, avatarType }) => {
  const { title, category } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      let fetchURL;
      if (title) {
        fetchURL = `Search/${API_KEY}/${title}`;
      } else if (category) {
        fetchURL = `${category}/${API_KEY}`;
      }
      const res = await axios.get(fetchURL);
      console.log(res);
      setSearchData(res.data?.results || res.data?.items);
      setIsLoading(false);
    }
    fetchData();
  }, [API_KEY, title, category]);

  return (
    <All
      username={username}
      avatarType={avatarType}
      title={category || `${title} Results:`}
      moviesArray={searchData}
      isLoading={isLoading}
    />
  );
};

export default Search;

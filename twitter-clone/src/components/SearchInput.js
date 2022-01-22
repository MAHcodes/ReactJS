import styles from "./SearchInput.module.css";
import { RiSearchLine } from "react-icons/ri";
import useFetch from "../hooks/useFetch";

const Search = ({ pHolder, bg }) => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const { data, error, loading } = useFetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
  );
  return (
    <div>
      <div style={{ backgroundColor: bg }} className={styles.search}>
        <RiSearchLine className={styles.icon} />
        <input type="search" placeholder={pHolder} />
      </div>
    </div>
  );
};

export default Search;

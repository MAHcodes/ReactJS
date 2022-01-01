import styles from "./SearchInput.module.css";
import { RiSearchLine } from "react-icons/ri";

const Search = () => {
  return (
    <div className={styles.search}>
      <RiSearchLine className={styles.icon} />
      <input type="search" placeholder="Search Twitter" />
    </div>
  );
};

export default Search;

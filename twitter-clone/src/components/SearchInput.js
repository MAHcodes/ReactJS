import styles from "./SearchInput.module.css";
import { RiSearchLine } from "react-icons/ri";

const Search = ({ pHolder, bg, pad, val, handleSearch }) => {
  return (
    <div>
      <div
        style={{ padding: pad, backgroundColor: bg }}
        className={styles.search}
      >
        <RiSearchLine className={styles.icon} />
        <input
          type="search"
          placeholder={pHolder}
          value={val}
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </div>
  );
};

export default Search;

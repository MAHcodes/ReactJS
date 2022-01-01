import styles from "./RightSidebar.module.css";
import SearchInput from "./SearchInput";

const RightSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SearchInput />
    </div>
  );
};

export default RightSidebar;

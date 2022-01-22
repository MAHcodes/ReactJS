import styles from "./RightSidebar.module.css";
import SearchInput from "./SearchInput";

const RightSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SearchInput bg="rgb(var(--bg-dark-2))" pHolder="Search Twitter" />
    </div>
  );
};

export default RightSidebar;

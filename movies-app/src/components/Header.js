import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <form>
        <input
          className={classes.search}
          type="search"
          placeholder="Search movie, TV show, series..."
        />
      </form>
    </header>
  );
};

export default Header;


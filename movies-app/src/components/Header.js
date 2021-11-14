import classes from "./Header.module.css";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ username, avatarType }) => {
  return (
    <header>
      <form>
        <input
          className={classes.search}
          type="search"
          placeholder="Search movie, TV show, series..."
        />
      </form>
      <div className={classes.nav}>
        <div className={classes.fav}>
          <MdFavorite />
        </div>
        <div className={classes.profile}>
          <p>
            <Link to="/profile">{username}</Link>
          </p>
          <Link to="/profile" className={classes.avatar}>
            <img
              src={`https://avatars.dicebear.com/api/${avatarType}/${username}.svg?mood[]=happy`}
              alt={"avatar"}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

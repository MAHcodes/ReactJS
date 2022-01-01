import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

const NavLink = ({ Icon, title, route }) => {
  return (
    <div className={styles.navLink}>
      <Link to={`/${route}`}>
        <Icon />
        <p className={styles.navText}>{title}</p>
      </Link>
    </div>
  );
};

export default NavLink;

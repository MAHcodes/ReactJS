import { NavLink } from "react-router-dom";
import styles from "./NavbarLink.module.css";

const NavbarLink = ({ Icon, IconFilled, title, route }) => {
  return (
    <div className={styles.navLink}>
      <NavLink
        className={(isActive) => (isActive.isActive ? styles.isActive : "")}
        to={`/${route}`}
      >
        <Icon className={styles.outline} />
        <IconFilled className={styles.filled} />
        <p className={styles.navText}>{title}</p>
      </NavLink>
    </div>
  );
};

export default NavbarLink;

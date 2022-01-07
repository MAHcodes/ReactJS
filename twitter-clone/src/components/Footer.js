import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        <li>
          {" "}
          <Link to="#">About</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Help Center</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Terms of Service</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Privacy Policy</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Cookie Policy</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Accessibility</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Ads info</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Blog</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Status</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Careers</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Brand Resources</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Advertising</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Marketing</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Twitter for Business</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Developers</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Directory</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">Settings</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="#">© 2022 Twitter, Inc.</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Footer;

import styles from "./RouteHead.module.css";

const RouteHead = ({ title, Icon }) => {
  return (
    <div className={styles.content}>
      <h3>{title}</h3>
      <div>
        <Icon />
      </div>
    </div>
  );
};

export default RouteHead;

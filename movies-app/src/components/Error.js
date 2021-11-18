import classes from "./Loading.module.css";

const Loading = ({ err }) => {
  return (
    <div className={classes.container}>
      {console.log({ err })}
      {err ? (
        <p className={classes.err}>{err}</p>
      ) : (
        <div className={classes.loading}></div>
      )}
    </div>
  );
};

export default Loading;

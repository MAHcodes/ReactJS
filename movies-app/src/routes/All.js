import MoviesRow from "../components/MoviesRow";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import classes from "../routes/People.module.css";

const All = ({ username, avatarType, isLoading, title, moviesArray }) => {
  return (
    <>
      <Header username={username} avatarType={avatarType} />
      <div className={classes.container}>
        <Sidebar />
        {isLoading ? (
          <Loading />
        ) : (
          <div className={classes.overflow}>
            <MoviesRow
              more={false}
              wrap={true}
              title={title}
              moviesArray={moviesArray}
            />
          </div>
        )}
        ;
      </div>
    </>
  );
};

export default All;

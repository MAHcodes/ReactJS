import { useParams } from "react-router";
import Sidebar from "../components/Sidebar";
import name from "../assets/name.json";
import { useEffect, useState } from "react";
import classes from "./People.module.css";
import MoviesRow from "../components/MoviesRow";
import Loading from "../components/Loading";

const People = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [peopleData, setPeopleData] = useState({});
  useEffect(() => {
    setIsLoading(true);
    setPeopleData(name);
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.overflow}>
        <div className={classes.flex}>
          <div className="img">
            <img src={peopleData.image} alt={peopleData.name} />
          </div>
          <div className={classes.content}>
            <h2>{peopleData.name}</h2>
            <p>{peopleData.summary}</p>
            <p>
              <span>Role: </span>
              {peopleData.role}
            </p>
            <p>
              <span>BirthDate: </span>
              {peopleData.birthDate}
            </p>
            {peopleData.awards && (
              <p>
                <span>Awards: </span>
                {peopleData.awards}
              </p>
            )}
            {peopleData.deathDate && (
              <p>
                <span>Awards: </span>
                {peopleData.deathDate}
              </p>
            )}
            {peopleData.height && (
              <p>
                <span>Height: </span>
                {peopleData.height}
              </p>
            )}
          </div>
        </div>
        <MoviesRow title="Known For" moviesArray={peopleData.knownFor} />
      </div>
    </div>
  );
};

export default People;

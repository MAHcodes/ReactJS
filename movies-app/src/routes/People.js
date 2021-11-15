import { useParams } from "react-router";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import classes from "./People.module.css";
import MoviesRow from "../components/MoviesRow";
import Loading from "../components/Loading";
import Header from "../components/Header";
import axios from "../api/request";

const People = ({ username, avatarType }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [peopleData, setPeopleData] = useState({});
  useEffect(() => {
    setIsLoading(true);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const fetchURL = `Name/${API_KEY}/${id}`;
    async function fetchData() {
      const res = await axios.get(fetchURL);
      setPeopleData(res.data);
      console.log(res.data);
      setIsLoading(false);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <Header username={username} avatarType={avatarType} />
      <div className={classes.container}>
        <Sidebar />
        {isLoading ? (
          <Loading />
        ) : (
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
            <MoviesRow
              title="Known For"
              moviesArray={peopleData.knownFor}
              more={false}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default People;

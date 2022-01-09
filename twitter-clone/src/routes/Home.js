import { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from "./Home.module.css";
import { collection, onSnapshot } from "firebase/firestore";
import Tweet from "../components/Tweet";
import RouteHead from "../components/RouteHead";
import { BsStars } from "react-icons/bs";

const Home = () => {
  const [posts, setPosts] = useState("");
  //useEffect(() => {
  //(async function (db) {
  //const postsCol = collection(db, "posts");
  //onSnapshot(postsCol, (snapshot) => {
  //const postList = snapshot.docs.map((doc) => ({
  //id: doc.id,
  //...doc.data(),
  //}));
  //setPosts(JSON.stringify(postList));
  //console.log(postList);
  //});
  //})(db);
  //}, []);

  return (
    <div className={styles.home}>
      <RouteHead title={"Home"} Icon={BsStars} />
      <Tweet />
    </div>
  );
};

export default Home;

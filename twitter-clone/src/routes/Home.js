import { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from "./Home.module.css";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [posts, setPosts] = useState("");
  //useEffect(() => {
  //(async function (db) {
  //const postsCol = collection(db, "posts");
  //const postSnapshot = await getDocs(postsCol);
  //const postList = postSnapshot.docs.map((doc) => ({
  //id: doc.id,
  //data: doc.data(),
  //}));
  //setPosts(JSON.stringify(postList));
  //})(db);
  //}, []);

  return <div className={styles.home}> Home {posts}</div>;
};

export default Home;

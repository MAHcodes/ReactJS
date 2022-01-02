import { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from "./Home.module.css";
import { collection, onSnapshot } from "firebase/firestore";

const Home = () => {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    (async function (db) {
      const postsCol = collection(db, "posts");
      onSnapshot(postsCol, (snapshot) => {
        const postList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(JSON.stringify(postList));
        console.log(postList);
      });
    })(db);
  }, []);

  return <div className={styles.home}> Home {posts}</div>;
};

export default Home;

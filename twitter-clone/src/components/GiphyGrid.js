import SearchInput from "./SearchInput";
import styles from "./GiphyGrid.module.css";
import { CgClose } from "react-icons/cg";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const GiphyGrid = ({ setMedia, setGifShow }) => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [endpoint, setEndpoint] = useState("trending");
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, loading } = useFetch(
    `https://api.giphy.com/v1/gifs/${endpoint}?api_key=${API_KEY}`,
    offset,
    searchQuery,
    25
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setEndpoint(searchQuery ? "search" : "trending");
  };

  useEffect(() => {
    const gifsList = data?.data;
    const gifsURL = gifsList?.map((gif) =>
      gif.images.downsized?.url?.replace(/medkia+\d/g, "i")
    );
    setGifs(gifsURL);
  }, [data]);

  return (
    <div className={styles.giphyBox}>
      <div className={styles.searchWrapper}>
        <button
          onClick={() => setGifShow(false)}
          className="removeBtn"
          title="Remove"
        >
          <CgClose />
        </button>
        <div className={styles.searchInput}>
          <SearchInput
            pad="0.35em 1em"
            bg="rgb(var(--bg-dark))"
            pHolder="Search for GIFs"
            val={searchQuery}
            handleSearch={handleSearch}
          />
        </div>
      </div>
      <div className={styles.gifsContainer}>
        {loading ? (
          <Loading />
        ) : error ? (
          <p style={{ color: "rgb(var(--error))" }}>{error.message}</p>
        ) : (
          gifs &&
          gifs?.map((gif, i) => (
            <img
              onClick={() => {
                setMedia(gif);
                setGifShow(false);
              }}
              key={`${i}${gif}`}
              className={styles.gif}
              src={gif}
              alt=""
              loading="lazy"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GiphyGrid;

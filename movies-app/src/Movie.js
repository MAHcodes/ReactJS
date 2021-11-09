import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieEndpoint from "./title.json";
import axios from "./request";
import classes from "./Movie.module.css";
import { MdFavoriteBorder, MdFavorite, MdPhotoSizeSelectActual } from "react-icons/md";
import { HiOutlineShare, HiShare } from "react-icons/hi";
import { IoPlay } from "react-icons/io5";
import { BsFillStarFill } from "react-icons/bs";
import Sidebar from "./Sidebar";
import Trailer from "./Trailer";

const Movie = () => {
    let { id } = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const fetchURL = `/Title/${API_KEY}/${id}/FullActor,Posters,Images,Ratings`;
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchURL);
            // setMovieData(response.data)
            setMovieData(movieEndpoint)
            console.log(movieData.id);
        }
        fetchData();
    }, [fetchURL])

    const [trailer, setTrailer] = useState(true);


    return <div className={classes.container}>
        <Sidebar />
        <div style={{flex: 1}}>
            <div className={classes.banner} style={{backgroundImage: `url(${movieData.posters?.backdrops[0]?.link})` }}>
                <div className={classes.content}>
                    <div className={classes.mainInfo}>
                        <h1 className={classes.title}>{movieData.title?.toUpperCase()}</h1>
                        <div className={classes.buttonsGroup}>
                            <button className={`${classes.active} ${classes.btn}`} >
                                <MdFavoriteBorder className={classes.outlineBtn} />
                                <MdFavorite className={classes.fillBtn} />
                            </button>
                            <button className={classes.btn} >
                                <HiOutlineShare className={classes.outlineBtn} />
                                <HiShare className={classes.fillBtn} />
                            </button>
                        </div>
                    </div>
                    <div className={classes.aboutMovie}>
                        <p>{`${movieData.year} • ${movieData.genres} • ${movieData.runtimeStr}`}</p>
                        <div className={classes.rating}>
                            <span className={classes.rate}>
                                <p>{movieData.imDbRating}</p>
                                <span className={classes.star}><BsFillStarFill /></span>
                            </span>
                            <p className={classes.votes}>{(Number(movieData.imDbRatingVotes)).toLocaleString()} votes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.moreInfo}>
                <div className={classes.mediaButtons}>
                    <button className={classes.watchBtn}>
                        <IoPlay />
                        <span>Watch Trailer</span>
                    </button>
                    <button className={classes.viewBtn}>
                        <MdPhotoSizeSelectActual /> 
                        <span>View Images</span>
                    </button>
                </div>

                {trailer && <Trailer videoID={movieData.id} />}

            </div>

        </div>
    </div>
}

export default Movie;
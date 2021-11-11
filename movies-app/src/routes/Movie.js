import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movieEndpoint from "../assets/movie.json"; // development
import axios from "../api/request";
import classes from "./Movie.module.css";
import { MdFavoriteBorder, MdFavorite, MdPhotoSizeSelectActual } from "react-icons/md";
import { HiOutlineShare, HiShare } from "react-icons/hi";
import { IoPlay } from "react-icons/io5";
import { BsFillStarFill } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import Trailer from "../components/Trailer";
import Images from "../components/Images";

const Movie = ({username}) => {
    let { id } = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movieData, setMovieData] = useState({});
    const fetchURL = `/Title/${API_KEY}/${id}/FullActor,Posters,Images,Ratings`;

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchURL);
            // setMovieData(response.data)
            setMovieData(movieEndpoint)  // development
        }
        fetchData();
    }, [fetchURL]);

    const [trailerID, setTrailerID] = useState("");
    const handleTrailer = (movieID) => {
        if (!trailerID) {
            async function fetchTrailer() {
                const videoURL = `/YouTubeTrailer/${API_KEY}/${movieID}`;
                const response = await axios.get(videoURL);
                setTrailerID('hdxh9GUA-4A'); // development
                // setTrailerID(response.data.videoId);
                setImages(false);
            }
            fetchTrailer();
        } else {
            setTrailerID("");
        }
        
    };

    const [images, setImages] = useState(false)
    const handleImages = (imgList) => {
        if (!images) {
            setImages(imgList);
            setTrailerID("");
        } else {
            setImages(false);
        }
    };

    return <div className={classes.container}>
        <Sidebar username={username} />
        <div style={{flex: 1, overflow: "hidden"}}>
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
                        <p>{`${movieData.contentRating || "Content Rating"} • ${movieData.year || "Year"} • ${movieData.genres || "Genres"} • ${movieData.runtimeStr || "Duation"}`}</p>
                        <div className={classes.rating}>
                            <span className={classes.rate}>
                                <p>{movieData.imDbRating} <small>/10</small></p>
                                <span className={classes.star}><BsFillStarFill /></span>
                            </span>
                            <p className={classes.votes}>{(Number(movieData.imDbRatingVotes) || "").toLocaleString()} votes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.moreInfo}>
                <div className={classes.mediaButtons}>
                    <button 
                        className={classes.watchBtn}
                        onClick={() => handleTrailer(movieData.id)} >
                        <IoPlay />
                        <span>Watch Trailer</span>
                    </button>
                    <button className={classes.viewBtn}
                        onClick={() => handleImages(movieData.images?.items)}>
                        <MdPhotoSizeSelectActual /> 
                        <span>View Images</span>
                    </button>
                </div>
            </div>

            { trailerID && <Trailer videoID={trailerID} /> }

            { images && <Images images={images} />}
            { console.log(movieData.similars)}

            <div className={`${classes.moreInfo} ${classes.grid}`}>
                <div className={classes.plot}>
                    <h2>Plot</h2>
                    <p>{movieData.plot}</p>
                </div>
                <div className={classes.director}>
                    <h2>Director</h2>
                    <p>{movieData.directors}</p>
                </div>
                <div className={classes.writer}>
                    <h2>Writer</h2>
                    <p>{movieData.writers}</p>
                </div>
                <div className={classes.release}>
                    <h2>Release Date</h2>
                    <p>{movieData.releaseDate}</p>
                </div>
                <div className={classes.more}>
                    <h2>More</h2>
                    <p><span>Type: </span>{movieData.type}</p>
                    <p><span>Countries: </span>{movieData.countries}</p>
                    <p><span>Languages: </span>{movieData.languages}</p>
                    <p><span>Stars: </span>{movieData.stars}</p>
                    <p><span>Companies: </span>{movieData.companies}</p>
                    <p><span>Budget:</span> {movieData.boxOffice?.budget}</p>
                    <p><span>Cumulative World Wide Gross:</span> {movieData.boxOffice?.cumulativeWorldwideGross}</p>
                </div>
                <div className={classes.cast}>
                    <details>
                        <summary className={classes.h2}>Cast</summary>
                        {movieData.fullCast?.others.map((item, index) => (
                            <details key={index}>
                                <summary>{item.job}</summary>
                                <ul>{item.items.map((person, i) => (
                                    <li key={i}>
                                        <Link to={`/people/${person.id}`} >{person.name}</Link> 
                                        {person.description && ` (${person.description})`}
                                    </li> 
                                ))}</ul>
                            </details>
                        ))}
                    </details>
                </div>
            </div>
            <div className={classes.moreInfo}>
                <h2>Actors</h2>
                <div className={classes.actors}>
                    {movieData.fullCast?.actors?.map(actor => (
                        <div key={actor.id} className={classes.card}>
                            <Link to={`/people/${actor.id}`} >
                                <img loading="lazy" src={actor.image} alt={actor.name} />
                                <p>{actor.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className={classes.similar}>
                    {movieData.similars?.map(movie => (
                        ""
                    ))}
                </div>
            </div>

        </div>
    </div>
}

export default Movie;
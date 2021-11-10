import classes from "./Media.module.css";

const Trailer = ({videoID}) => {
    return <div className={classes.container}>
        <iframe title={videoID} className={classes.ytVideo} src={`https://www.youtube.com/embed/${videoID}`}></iframe>
    </div>
}

export default Trailer;
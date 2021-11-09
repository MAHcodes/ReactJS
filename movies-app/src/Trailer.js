import classes from "./Media.module.css";

const Trailer = ({trailerID}) => {
    return <div className={classes.container}>
        <iframe className={classes.ytVideo} src={`https://www.youtube.com/embed/${trailerID}`}></iframe>
    </div>
}

export default Trailer;
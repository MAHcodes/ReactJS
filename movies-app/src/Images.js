import classes from "./Media.module.css";

const Images = ({images}) => {
    const handleScroll = e => {
        let target;
        if (e.target.nodeName === "IMG") target = e.target.parentElement
        else target = e.target;
        target.scrollLeft += e.deltaY * 3;

    }
    return <div className={classes.container} onWheel={e => handleScroll(e)}>
        {images.map((img, index) => (
            <img loading="lazy" className={classes.movieImg} key={index} src={img.image} alt={img.title} />
        ))}
    </div>
}

export default Images;
import classes from "./Media.module.css";
import { useEffect, useRef } from "react";

const Images = ({images}) => {
    const wheelTimeout = useRef()

    const handleScroll = e => {
        let target;
        if (e.target.nodeName === "IMG") target = e.target.parentElement
        else target = e.target;
        target.scrollLeft += e.deltaY * 10;

        clearTimeout(wheelTimeout.current);

        wheelTimeout.current = setTimeout(() => {
            wheelTimeout.current = false
        }, 200)
    }

    useEffect(() => {
        const cancelWheel = e => wheelTimeout.current && e.preventDefault();
        document.body.addEventListener('wheel', cancelWheel, {passive:false});
        return () => document.body.removeEventListener('wheel', cancelWheel);
    }, [])


    return <div className={classes.container} onWheel={e => handleScroll(e)}>
        {images.map((img, index) => (
            <img loading="lazy" className={classes.movieImg} key={index} src={img.image} alt={img.title} title={img.title} />
        ))}
    </div>
}

export default Images;
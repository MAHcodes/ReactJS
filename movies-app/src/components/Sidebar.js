import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = ({username}) => {
    return <aside>
        <div className={classes.container}>
            <div className={classes.box}>
                <p className={classes.title}>Browse</p>
                <p><Link to={"/"}>Coming Soon</Link></p>
                <p><Link to={"/"}>In Theaters</Link></p>
                <p><Link to={"/"}>Box Office</Link></p>
            </div>
            <div className={classes.box}>
                <p className={classes.title}>Most Popular</p>
                <p><Link to={"/"}>Movies</Link></p>
                <p><Link to={"/"}>TV's</Link></p>
            </div>
            <div className={classes.box}>
                <p className={classes.title}>Top 250</p>
                <p><Link to={"/"}>Movies</Link></p>
                <p><Link to={"/"}>TV's</Link></p>
            </div>
            <div className={classes.box}>
                <p className={classes.title}>More</p>
                <p><Link to={"/"}>My Favorites</Link></p>
                <p><Link to={"/"}>Edit Profile</Link></p>
                <p><Link to={"/"}>About</Link></p>
            </div>
        </div>
    </aside>
}

export default Sidebar;
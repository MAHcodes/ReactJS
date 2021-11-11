import { useParams } from "react-router";
import classes from "./People.module.css";
import Sidebar from "../components/Sidebar";

const People = () => {
    const { id } = useParams();
    return <div className={classes.container}>
        <Sidebar /> 
        {id}
        </div>
}

export default People;
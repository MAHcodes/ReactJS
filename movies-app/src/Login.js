import { useState } from "react";
import classes from "./Login.module.css";
import bg from "./background.png";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    return <div className={classes.bg} style={{backgroundImage: `url(${bg})`}}>
        <div className={classes.container}>
            <div className={classes.card}>
                <div className={classes.imgContainer}>
                    <img src={`https://avatars.dicebear.com/api/adventurer-neutral/${username}.svg`} alt="Avatar" />
                </div>
                <form className={classes.form} autoComplete="off" onSubmit={e => {e.preventDefault(); navigate("/") } }>
                    <label className="light" htmlFor="username">Enter Your Name:</label>
                    <input required autoFocus placeholder="John Smith" id={classes.username} type="text" onChange={ (e) => setUsername(e.target.value.trim()) } />
                    <input className={classes.btn} type="submit" value="Get Started!" />
                </form>
            </div>
        </div>
    </div>
}

export default Login;
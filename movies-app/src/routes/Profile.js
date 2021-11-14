import classes from "./Profile.module.css";
import bg from "../assets/background.png";
import { useNavigate } from "react-router-dom";

const Profile = ({ username, setUsername, handleType, avatarType }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.bg} style={{ backgroundImage: `url(${bg})` }}>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.imgContainer}>
            <img
              src={`https://avatars.dicebear.com/api/${avatarType}/${username}.svg?mood[]=happy`}
              alt="Avatar"
            />
          </div>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem("username", JSON.stringify(username));
              navigate("/");
            }}
          >
            <label className="light textDark" htmlFor={classes.username}>
              Enter Your Name:
            </label>
            <input
              required
              autoFocus
              placeholder="John Smith"
              value={username}
              id={classes.username}
              type="text"
              onChange={(e) => setUsername(e.target.value.trim())}
            />
            <select id={classes.avatarType} onChange={handleType}>
              <option disabled selected>
                Choose Avatar Type
              </option>
              <option value="adventurer">adventurer</option>
              <option value="adventurer-neutral">adventurer-neutral</option>
              <option value="avataaars">avataaars</option>
              <option value="big-ears">big-ears</option>
              <option value="big-ears-neutral">big-ears-neutral</option>
              <option value="big-smile">big-smile</option>
              <option value="bottts">bottts</option>
              <option value="croodles">croodles</option>
              <option value="croodles-neutral">croodles-neutral</option>
              <option value="gridy">gridy</option>
              <option value="identicon">identicon</option>
              <option value="initials">initials</option>
              <option value="jdenticon">jdenticon</option>
              <option value="micah">micah</option>
              <option value="miniavs">miniavs</option>
              <option value="open-peeps">open-peeps</option>
              <option value="personas">personas</option>
              <option value="pixel-art">pixel-art</option>
              <option value="pixel-art-neutral">pixel-art-neutral</option>
            </select>
            <input className={classes.btn} type="submit" value="Get Started!" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;


import { Link } from "react-router-dom";

const Header = () => {
    return <header>
        <ul className="nav nav-tabs justify-content-center" role="tab">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/GET">GET</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/POST">POST</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/PUT">PUT</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/DELETE">DELETE</Link>
            </li>
        </ul>
    </header>
}

export default Header;
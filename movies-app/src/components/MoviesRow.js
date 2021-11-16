import { useNavigate, Link } from "react-router-dom";

const MoviesRow = ({ title, moviesArray, more, wrap }) => {
  const navigate = useNavigate();
  return (
    <div className="row">
      <div className="moviesRowTitle">
        <h2>{title}</h2>
        {more && (
          <Link to="/" className="showall">
            show all
          </Link>
        )}
      </div>
      <div className={`moviesRow ${!wrap ? "rowWrap" : ""}`}>
        {moviesArray &&
          moviesArray.map((item, index) => (
            <div
              key={index}
              className="poster"
              onClick={() => navigate(`/${item.id}`)}
            >
              <Link to={`/${item.id}`}>
                <img loading="lazy" src={item.image} alt={item.fullTitle} />
                <div className="info">
                  <p>{item.fullTitle || item.title}</p>
                  <span>
                    {item.rank && (
                      <p style={{ fontSize: ".75em" }}>Rank: {item.rank}</p>
                    )}
                    {item.imDbRating && (
                      <p style={{ fontSize: ".75em" }}>
                        IMDB Rating: {item.imDbRating}
                      </p>
                    )}
                    {item.description && <p>{item.description}</p>}
                  </span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesRow;

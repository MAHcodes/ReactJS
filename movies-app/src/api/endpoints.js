const API_KEY = process.env.REACT_APP_API_KEY;

const endpoints = {
  top250movie: `/Top250Movies/${API_KEY}`,
  top250tv: `Top250TVs/${API_KEY}`,
  mostPopularMovies: `MostPopularMovies/${API_KEY}`,
  mostPopularTvs: `MostPopularTvs/${API_KEY}`,
  inTheaters: `InTheaters/${API_KEY}`,
  comingSoon: `ComingSoon/${API_KEY}`,
};

export default endpoints;

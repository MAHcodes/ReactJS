import useFetch from "../hooks/useFetch";

const Wanted = ({api}) => {
  //console.log(api)
  const {data, error, isLoading} = useFetch(api);
  return !isLoading && !error && <div className="container">
    {JSON.stringify(data)}
  </div>;

};

export default Wanted;

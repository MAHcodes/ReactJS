import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (URL, params = "{}") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (api, parameters) => {
      setIsLoading(true);
      try {
        const response = await axios.get(api, {
          ...parameters,
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response?.data);
          console.log(response.data.items); //TODO
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          console.log(err.message); //TODO
          setData(null);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(URL, JSON.parse(params));

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [URL, params]);

  return {data, error, isLoading};
};

export default useFetch;

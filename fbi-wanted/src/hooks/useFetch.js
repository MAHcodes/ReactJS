import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (api) => {
      setIsLoading(true);
      try {
        const response = await axios.get(api, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error); // TODO DEVELOPMENT
          setError(error.message);
          setData(null);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(URL);

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [URL]);

  return { data, error, isLoading };
};

export default useFetch;

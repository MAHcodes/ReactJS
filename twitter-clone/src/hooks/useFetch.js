import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (URL, params = "{}") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    axios
      .get(URL, { ...params, cancelToken: source.token })
      .then((res) => {
        if (isMounted) {
          setData(res);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setData(null);
        }
      })
      .finally(() => {
        isMounted && setLoading(false);
      });

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [URL, params]);

  return { data, loading, error };
};

export default useFetch;

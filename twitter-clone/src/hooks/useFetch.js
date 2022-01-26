import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (URL, offset, query, limit) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData([]);
  }, [URL, query]);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    setLoading(true);
    axios
      .get(URL, {
        params: { offset, q: query, limit },
        cancelToken: source.token,
      })
      .then((res) => {
        console.log(res);
        if (isMounted) {
          setData((prevData) =>
            !prevData ? [...prevData.data, ...res.data] : res.data
          );
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
  }, [URL, limit, query, offset]);

  return { data, loading, error };
};

export default useFetch;

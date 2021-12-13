import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

const WantedContainer = () => {
  //const api = "https://api.fbi.gov/wanted/v1/list";
  const api = "https://api.adviceslip.com/advice";
  const [list, setList] = useState([]);
  const { data, error, isLoading } = useFetch(api);

  useEffect(() => {
    setList(JSON.stringify(data));
    console.log(data);
  }, [data]);

  return <div>{list}</div>;
};

export default WantedContainer;

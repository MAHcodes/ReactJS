import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

const WantedContainer = () => {
  //const api = "";
  const [list, setList] = useState([]);
  const { data, error, isLoading } = useFetch(
    "https://api.fbi.gov/wanted/v1/list",
    JSON.stringify({ params: { page: 3 } })
  );

  useEffect(() => {
    setList(JSON.stringify(data));
    console.log(data);
  }, [data]);

  return <div>{list}</div>;
};

export default WantedContainer;

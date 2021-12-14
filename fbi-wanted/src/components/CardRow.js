import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import json from "../list.json";
import Card from "./Card";
import Error from "./Error";
import Loading from "./Loading";
import styled from "styled-components";

const CardRow = () => {
  const [list, setList] = useState([]);
  const { data, error, isLoading } = useFetch(
    "https://api.fbi.gov/wanted/v1/list",
    JSON.stringify({ params: { page: 3 } })
  );

  useEffect(() => {
    setList(data);
  }, [data]);

  return (
    <Content>
      <pre>{JSON.stringify(list, null, 2)}</pre>
      {console.log("yo", error)}
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error errMsg={error} />
      ) : (
        list &&
        list.map((item) => (
          <Card
            key={item.uid}
            api={item["@id"]}
            title={item.title}
            image={item.images[0].thumb}
            subject={item.subjects[0]}
          />
        ))
      )}
    </Content>
  );
};

const Content = styled.div``;

export default CardRow;

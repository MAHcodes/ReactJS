import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import Error from "./Error";
import Loading from "./Loading";
import styled from "styled-components";

const CardRow = () => {
  const [list, setList] = useState([]);
  const {data, error, isLoading} = useFetch(
    "https://api.fbi.gov/wanted/v1/list",
    JSON.stringify({params: {page: 3}})
  );

  useEffect(() => {
    setList(data?.items);
  }, [data]);

  return (
    <Content className="container">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error errMsg={error} />
      ) : (
        Array.isArray(list) &&
        list.map((item) => (
          <Card
            key={item.uid}
            uid={item.uid}
            title={item.title}
            image={item.images[0].thumb}
            subject={item.subjects[0]}
          />
        ))
      )}
    </Content>
  );
};

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #ccc;
  border: 1px solid #ccc;
  grid-gap: 1px;
`;

export default CardRow;

import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import Error from "./Error";
import Loading from "./Loading";
import styled from "styled-components";

const CardRow = ({ setWanted }) => {
  const [list, setList] = useState([]);
  const { data, error, isLoading } = useFetch(
    "https://api.fbi.gov/wanted/v1/list",
    JSON.stringify({ params: { page: 3 } })
  );

  useEffect(() => {
    setList(data);
  }, [data]);

  return (
    <Content className="container">
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
            setWanted={setWanted}
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

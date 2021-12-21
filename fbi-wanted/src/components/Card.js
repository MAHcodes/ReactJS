import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Card = ({api, title, subject, image, setWanted}) => {
  //<p>{api + title}</p>
  //<p>{subject}</p>
  const navigate = useNavigate();
  return (
    <StyledCard
      onClick={() => {
        setWanted(api);
        navigate(`/wanted/${title}`);
      }}
    >
      <img src={image} alt={title} />
      <Info>
        <Hdr4>{title}</Hdr4>
        <p>{subject}</p>
      </Info>
    </StyledCard>
  );
};

const Info = styled.div`
  text-align: center;
`;

const Hdr4 = styled.h4`
  margin-block: 1em;
`;

const StyledCard = styled.div`
  background-color: white;
  padding: 1rem;
  display: grid;
  place-items: center;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 40px -10px #000;
    border-radius: 6px;
    z-index: 2;
  }
`;

export default Card;

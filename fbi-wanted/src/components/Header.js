import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Link
          style={{
            display: "flex",
            color: "white",
            textDecoration: "none",
            alignItems: "center",
          }}
          to="/"
        >
          <Logo
            src="https://www.fbi.gov/++theme++fbigov.theme/images/fbi-seal-logo.png"
            alt="FBI logo"
          />
          <Title>Wanted by the FBI</Title>
        </Link>
      </Container>
    </StyledHeader>
  );
};

const Container = styled.div`
  max-width: 1280px;
  margin-inline: auto;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  margin-left: 0.25em;
`;

const StyledHeader = styled.header`
  background-color: #000d1c;
  color: #fff;
  padding: 0.5rem;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 75px;
`;

export default Header;

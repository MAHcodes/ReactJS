import styled from "styled-components";

const Error = ({ errMsg }) => {
  return <Message>{errMsg}</Message>;
};

const Message = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  z-index: 4;
  color: red;
  width: fit-content;
  height: fit-content;
  font-size: 2rem;
`;

export default Error;

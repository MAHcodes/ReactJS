import styled, { keyframes } from "styled-components";

const Loading = () => {
  return <Waiting />;
};

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Waiting = styled.span`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: fixed;
  inset: 0;
  margin: auto;
  z-index: 2;
  box-shadow: 0 0 0 max(100vh, 100vw) #0005;
  background-color: #0005;
  border-style: solid;
  border-width: 2px;
  border-block-color: transparent;
  border-top-color: #fff;
  border-inline-color: #fff;
  animation: ${rotate} 0.75s infinite ease-in-out;
`;

export default Loading;

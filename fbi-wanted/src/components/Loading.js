import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <WaitingBox>
      <Waiting />
      <Waiting />
      <Waiting />
      <Waiting />
    </WaitingBox>
  );
};

const rotate = keyframes`
  from {
    transform: translateY(20);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0.25;
  }
`;

const WaitingBox = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  z-index: 2;
  background-color: #0005;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Waiting = styled.span`
  background-color: #fff;
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: ${rotate} 0.5s infinite alternate ease-in-out;

  & + & {
    margin-left: 0.25em;
  }

  &:nth-child(1) {
    animation-delay: 0ms;
  }
  &:nth-child(2) {
    animation-delay: 125ms;
  }
  &:nth-child(3) {
    animation-delay: 250ms;
  }
  &:nth-child(4) {
    animation-delay: 375ms;
  }
`;

export default Loading;

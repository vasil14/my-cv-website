import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  margin: 8vh 6vw;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 84vh;
  max-width: 1268px;
  max-height: 674px;
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-300px 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeOutLeft = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-300px, 0, 0);
  }
`;

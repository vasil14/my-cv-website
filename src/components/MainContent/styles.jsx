import styled, { css } from "styled-components";
import { fadeInLeft, fadeOutLeft } from "../../styles";

export const ContentContainer = styled.div`
  transform: translate3d(0px, 0px, 0px);
  opacity: 1;

  padding: 0;
  position: absolute;
  overflow: hidden;
  left: 565px;
  right: 0;
  top: 15px;
  bottom: 15px;
  width: auto;
  height: auto;
  background: #31313a;
  z-index: ${({ $animationType }) => ($animationType === "in" ? 9 : 8)};
  pointer-events: none;

  ${({ $animationType }) => {
    switch ($animationType) {
      case "in":
        return css`
          animation: ${fadeInLeft} 1s ease forwards;
        `;
      case "out":
        return css`
          animation: ${fadeOutLeft} 1s ease forwards;
        `;
      default:
        return css`
          opacity: 1;
        `;
    }
  }}
`;

export const ContentWrapper = styled.div`
  position: relative;
  padding: 30px 30px 0 30px;
`;

export const TitleHeader = styled.div`
  position: relative;
  font-size: 20px;
  font-weight: bold;
  color: #4caf50;
  text-transform: uppercase;
  width: 100%;
  padding: 0 0 30px 0;

  &::before {
    content: "";
    position: absolute;
    left: -12px;
    top: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      rgba(120, 204, 109, 0.4) 0,
      rgba(120, 204, 109, 0.01) 100%
    );
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    left: -30px;
    right: 0;
    bottom: 0;
    width: auto;
    background: radial-gradient(
      ellipse at left,
      #dddddd 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;

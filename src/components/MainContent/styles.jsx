import styled, { css } from "styled-components";
import { fadeInLeft, fadeOutLeft } from "../../styles";

export const ContentContainer = styled.div`
  position: absolute;
  top: 15px;
  bottom: 15px;
  left: 565px;
  right: 0;
  background: #31313a;
  overflow: auto;
  transition: transform 0.8s ease, opacity 0.8s ease;
  z-index: ${({ $isActive }) => ($isActive ? 2 : 0)};
  pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
  transform: ${({ $isActive }) =>
    $isActive ? "translate3d(0, 0, 0)" : "translate3d(-300px, 0, 0)"};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
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

import styled from "styled-components";

export const ProfileBgContainer = styled.div`
  position: relative;
  float: left;
  width: 480px;
  height: 100%;
  background-color: #31313a;
  border-radius: 4px;
  // opacity: 0.3;
`;

export const ProfileContainer = styled.div`
  position: relative;
  float: left;
  width: 480px;
  height: 100%;
  overflow: hidden;
`;

export const ProfileImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-radius: 4px;
  z-index: 20;
  bground-image: url("https://placehold.co/500");

  &::before {
    content: "";
    position: absolute;
    left: -25%;
    bottom: -63%;
    width: 100%;
    height: 70%;
    background: #31313a;
    transform: rotate(10deg); // angle
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    right: -25%;
    bottom: -63%;
    width: 100%;
    height: 70%;
    background-color: #31313a;
    transform: rotate(-10deg); // angle
    z-index: 2;
  }
`;

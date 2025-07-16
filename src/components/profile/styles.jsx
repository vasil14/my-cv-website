import styled from "styled-components";

export const ProfileWrapper = styled.div`
  position: relative;
  float: left;
  height: 100%;
  width: 480px;
  display: flex;
  background-color: #31313a;
  border-radius: 5px;

  box-shadow: -15px -15px 0px 1px rgb(37, 37, 43);
  -webkit-box-shadow: -15px -15px 0px 1px rgb(37, 37, 43);
  -moz-box-shadow: -15px -15px 0px 1px rgb(37, 37, 43);
`;

export const PrifileContainer = styled.div`
  padding: 70px;
  position: relative;
  left: 0%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.div`
  position: absolute;
  background-image: url("https://placehold.co/600x400");
  height: 52%;
  overflow: hidden;
  left: 0;
  top: 0;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  -moz-border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px 4px 0 0;

  &::before {
    content: "";
    position: absolute;
    left: -25%;
    bottom: -60%;
    width: 100%;
    height: 70%;
    background: #31313a;
    -webkit-transform: rotate(12deg);
  }

  &::after {
    content: "";
    position: absolute;
    right: -25%;
    bottom: -60%;
    width: 100%;
    height: 70%;
    background: #31313a;
    -webkit-transform: rotate(-12deg);
  }
`;

export const ProfileName = styled.div`
  margin-top: 200px;
  font-size: xx-large;
  color: white;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

export const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #4caf50;
  }
`;

export const LinksWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 0.5px;
    width: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0)
    );
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: color 0.3s;
  position: relative; /* required for ::after */

  &:hover {
    color: #4caf50;
  }

  ${(props) =>
    props.$showRightBorder &&
    `
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 0.5px;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.2
          ),
          rgba(255, 255, 255, 0)
        );
      }
    `}
`;

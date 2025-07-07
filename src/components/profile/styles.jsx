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
  padding: 50px;
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
  margin-top: 100px;
  font-size: xx-large;
  color: white;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

import styled from "styled-components";
import MainContent from "../MainContent";
import { TitleHeader } from "../MainContent/styles";

const ShortDescription = styled.p`
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #ffffff8c;
  line-height: 1.8;
  margin-bottom: 60px;
`;

const AboutMe = ({ isActive }) => {
  const birthDate = new Date("1993-09-14");
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return (
    <MainContent title="About Me" isActive={isActive}>
      <ShortDescription>
        I'm Vasil, a {age} year old Full Stack Developer based in Tirana,
        Albania. I specialize in PHP, Laravel, React, and WordPress, with a
        strong focus on API development, clean UI design, and third-party
        integrations. I build scalable, high-performance solutions across
        platforms.
      </ShortDescription>
      <TitleHeader>My Services</TitleHeader>
    </MainContent>
  );
};

export default AboutMe;

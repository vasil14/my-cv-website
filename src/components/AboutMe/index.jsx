import styled from "styled-components";
import MainContent from "../MainContent";
import { TitleHeader } from "../MainContent/styles";
import { CodeIcon, PaletteIcon } from "@phosphor-icons/react";

const ShortDescription = styled.p`
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #ffffff8c;
  line-height: 1.8;
  // margin-bottom: 60px;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
`;

const ServiceBlock = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 47%;
  box-sizing: border-box; /* ensures padding/border don't break layout */
  // border-right: 1px solid #4caf50;
  // border-bottom: 1px solid #4caf50;

  &:nth-child(even)::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.5px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0.5px;
    width: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    );
  }

  /* Remove double borders in the middle */
  &:nth-child(odd) {
    border-right: none;
  }

  @media (max-width: 1024px) {
    width: 50%;
  }

  svg,
  img {
    background: #4caf50;
    border-radius: 50%;
    padding: 10px;
    color: #ffffff;
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
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
    <MainContent id="about-me" title="About Me" isActive={isActive}>
      <ShortDescription>
        I'm Vasil, a {age} year old Full-Stack Developer based in Tirana,
        Albania. I specialize in PHP, Laravel, React, and WordPress, with a
        strong focus on API development, clean UI design, and third-party
        integrations. I build scalable, high-performance solutions across
        platforms.
      </ShortDescription>
      <TitleHeader style={{ marginTop: "60px" }}>My Services</TitleHeader>
      <ServicesContainer>
        <ServiceBlock>
          <CodeIcon size={25} />
          <ServiceTitle>Web Development</ServiceTitle>
          <ShortDescription>
            Creating responsive and dynamic web applications using modern
            technologies.
          </ShortDescription>
        </ServiceBlock>
        <ServiceBlock>
          <PaletteIcon size={25} />
          <ServiceTitle>Graphic Design</ServiceTitle>
          <ShortDescription>
            Designing visually appealing graphics and user interfaces.
          </ShortDescription>
        </ServiceBlock>
        <ServiceBlock>
          <CodeIcon size={25} />
          <ServiceTitle>API Development</ServiceTitle>
          <ShortDescription>
            Building robust APIs for seamless data exchange and integration.
          </ShortDescription>
        </ServiceBlock>
        <ServiceBlock>
          <img src="images/wordpress-logo.svg" alt="WordPress Icon" />
          <ServiceTitle>Wordpress Developer</ServiceTitle>
          <ShortDescription>
            Developing and customizing WordPress themes and plugins for enhanced
            functionality.
          </ShortDescription>
        </ServiceBlock>
      </ServicesContainer>
    </MainContent>
  );
};

export default AboutMe;

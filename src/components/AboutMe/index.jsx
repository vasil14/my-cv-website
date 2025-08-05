import MainContent from "../MainContent";

const AboutMe = ({ isActive }) => {
  return (
    <MainContent title="About Me" isActive={isActive}>
      <p>This is the About Me section</p>
    </MainContent>
  );
};

export default AboutMe;

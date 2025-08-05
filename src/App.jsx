import { useState } from "react";
import VerticalSidebar from "./components/Sidebar";
import Profile from "./components/profile";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import { ContentContainer, MainContainer } from "./styles";

export default function App() {
  const [activeSection, setActiveSection] = useState("ABOUT");
  const [prevSection, setPrevSection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSectionChange = (newSection) => {
    if (newSection === activeSection || isAnimating) return;

    setPrevSection(activeSection);
    setActiveSection(newSection);
    setIsAnimating(true);

    setTimeout(() => {
      setPrevSection(null);
      setIsAnimating(false);
    }, 500); // match animation duration
  };

  const getComponent = (section, animationType) => {
    switch (section) {
      case "ABOUT":
        return <AboutMe animationType={animationType} />;
      case "RESUME":
        return <Resume animationType={animationType} />;
      case "MY WORK":
        return <MyWork animationType={animationType} />;
      case "CONTACT":
        return <Contact animationType={animationType} />;
      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <ContentContainer>
        <VerticalSidebar
          setActiveSection={handleSectionChange}
          active={activeSection}
        />
        <Profile />

        {/* Old component with fadeOut */}
        {prevSection && getComponent(prevSection, "out")}

        {/* New component with fadeIn */}
        {getComponent(activeSection, prevSection ? "in" : "none")}
      </ContentContainer>
    </MainContainer>
  );
}

import { useState } from "react";
import VerticalSidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import { ContentContainer, MainContainer } from "./styles";

export default function App() {
  const [activeSection, setActiveSection] = useState("ABOUT");

  return (
    <MainContainer>
      <ContentContainer>
        <VerticalSidebar
          setActiveSection={setActiveSection}
          active={activeSection}
        />
        <Profile />

        {/* All components rendered, only one is visible */}
        <AboutMe isActive={activeSection === "ABOUT"} />
        <Resume isActive={activeSection === "RESUME"} />
        <MyWork isActive={activeSection === "MY WORK"} />
        <Contact isActive={activeSection === "CONTACT"} />
      </ContentContainer>
    </MainContainer>
  );
}

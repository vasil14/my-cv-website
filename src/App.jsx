import styled from "styled-components";
import VerticalSidebar from "./components/Sidebar";
import Profile from "./components/profile";

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  display: flex;
  margin: 8vh 6vw;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 84vh;
  max-width: 1268px;
  max-height: 674px;
`;

const Sidebar = styled.div``;

export default function App() {
  return (
    <MainContainer>
      <ContentContainer>
        <VerticalSidebar />
        <Profile />
      </ContentContainer>
    </MainContainer>
  );
}

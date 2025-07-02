import styled from "styled-components";
import VerticalSidebar from "./components/Sidebar";
import Profile from "./components/profile";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 10px;
  max-width: 1280px;
  width: 100%;
  max-height: 700px;
  height: 100%;
  color: #333;
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

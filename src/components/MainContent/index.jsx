import { ContentContainer, ContentWrapper, TitleHeader } from "./styles";

const MainContent = ({ title, children, isActive }) => {
  return (
    <ContentContainer $isActive={isActive}>
      <ContentWrapper>
        <TitleHeader>{title}</TitleHeader>
        {children}
      </ContentWrapper>
    </ContentContainer>
  );
};

export default MainContent;

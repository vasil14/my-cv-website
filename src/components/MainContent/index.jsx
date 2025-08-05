import { ContentContainer, ContentWrapper, TitleHeader } from "./styles";

const MainContent = ({ title, children, animationType }) => {
  return (
    <ContentContainer $animationType={animationType}>
      <ContentWrapper>
        <TitleHeader>{title}</TitleHeader>
        {children}
      </ContentWrapper>
    </ContentContainer>
  );
};

export default MainContent;

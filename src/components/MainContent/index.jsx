import { ContentContainer, ContentWrapper, TitleHeader } from "./styles";

const MainContent = ({ title, children, isActive, id }) => {
  return (
    <ContentContainer id={id} $isActive={isActive}>
      <ContentWrapper>
        <TitleHeader>{title}</TitleHeader>
        {children}
      </ContentWrapper>
    </ContentContainer>
  );
};

export default MainContent;

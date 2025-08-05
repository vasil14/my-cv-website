import MainContent from "../MainContent";

const MyWork = ({ isActive }) => {
  return (
    <MainContent title="My Work" isActive={isActive}>
      <h1>My Work Content Here</h1>
    </MainContent>
  );
};

export default MyWork;

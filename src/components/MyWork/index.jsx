import MainContent from "../MainContent";

const MyWork = ({ isActive }) => {
  return (
    <MainContent id="my-work" title="My Work" isActive={isActive}>
      <h1>My Work Content Here</h1>
    </MainContent>
  );
};

export default MyWork;

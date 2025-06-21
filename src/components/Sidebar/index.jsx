import {
  AtIcon,
  CodeIcon,
  FileTextIcon,
  ListIcon,
  UserIcon,
} from "@phosphor-icons/react";
import styled from "styled-components";

const Sidebar = styled.div`
  position: relative;
  top: 15px;
  border-radius: 10px;
  padding: 12px 0;
  width: 60px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 1000;
`;

const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  font-size: 26px;
  color: black;
//   padding: 10px 0;
  height: 70px;
  width: 75px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
  color: #4caf50;
  transition: color 0.2s ease-in-out;
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: #ffffff;
  border-radius: 5px;
  width: 75px;
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 5px;
  color: black;

  cursor: pointer;
  transition: background 0.2s ease-in-out;

  border-top: 1px solid #e0e0e0;

  &:hover {
    color: #4caf50;
    transition: color 0.2s ease-in-out;
  }

  &.active {
    color: #4caf50;
  }

  &:first-child {
    border-top: none;
  }
`;

const Icon = styled.div`
  font-size: 20px;
  margin-bottom: 4px;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

const VerticalSidebar = () => {
  return (
    <Sidebar>
      <ToggleButton>
        <ListIcon size={25} />
      </ToggleButton>
      <Menu>
        <MenuItem className="active">
          <UserIcon size={25} />
          <Label>ABOUT</Label>
        </MenuItem>
        <MenuItem>
          <FileTextIcon size={25} />
          <Label>RESUME</Label>
        </MenuItem>
        <MenuItem>
          <CodeIcon size={25} />
          <Label>WORKS</Label>
        </MenuItem>
        <MenuItem>
          <AtIcon size={25} />
          <Label>CONTACT</Label>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default VerticalSidebar;

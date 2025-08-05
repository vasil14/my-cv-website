import { useState } from "react";
import { Label, Menu, MenuItem, Sidebar, ToggleButton } from "./styles";
import {
  AtIcon,
  CodeIcon,
  FileTextIcon,
  ListIcon,
  UserIcon,
} from "@phosphor-icons/react";

const VerticalSidebar = ({ active, setActiveSection }) => {
  const menuItems = [
    { label: "ABOUT", icon: <UserIcon size={25} /> },
    { label: "RESUME", icon: <FileTextIcon size={25} /> },
    { label: "MY WORK", icon: <CodeIcon size={25} /> },
    { label: "CONTACT", icon: <AtIcon size={25} /> },
  ];

  return (
    <Sidebar>
      <ToggleButton>
        <ListIcon size={25} />
      </ToggleButton>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            className={active === item.label ? "active" : ""}
            onClick={() => setActiveSection(item.label)}
          >
            {item.icon}
            <Label>{item.label}</Label>
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default VerticalSidebar;

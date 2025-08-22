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
    { id: "about-me", label: "ABOUT ME", icon: <UserIcon size={25} /> },
    { id: "resume", label: "RESUME", icon: <FileTextIcon size={25} /> },
    { id: "my-work", label: "MY WORK", icon: <CodeIcon size={25} /> },
    { id: "contact", label: "CONTACT", icon: <AtIcon size={25} /> },
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
            onClick={() => {
              setActiveSection(item.label);

              const section = document.getElementById(item.id);

              console.log(item.id);
              console.log(section);

              if (section) {
                section.scrollIntoView({
                  behavior: "smooth", // smooth scroll
                  block: "start", // align to top
                });
              }
            }}
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

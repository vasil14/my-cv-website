import { menuItems } from "../../utils/MenuItems";
import { Label, Menu, MenuItem, Sidebar, ToggleButton } from "./styles";
import { ListIcon } from "@phosphor-icons/react";

const VerticalSidebar = ({ active, setActiveSection }) => {
  return (
    <Sidebar>
      <ToggleButton>
        <ListIcon size={25} />
      </ToggleButton>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            className={active === item.id ? "active" : ""}
            onClick={() => {
              setActiveSection(item.id);

              const section = document.getElementById(item.id);

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

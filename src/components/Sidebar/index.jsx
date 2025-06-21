import { Label, Menu, MenuItem, Sidebar, ToggleButton } from "./styles";
import {
  AtIcon,
  CodeIcon,
  FileTextIcon,
  ListIcon,
  UserIcon,
} from "@phosphor-icons/react";

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

import {
  AtIcon,
  CodeIcon,
  FileTextIcon,
  UsersIcon,
} from "@phosphor-icons/react";

export const menuItems = [
  { id: "about-me", label: "ABOUT ME", icon: <UsersIcon size={25} /> },
  { id: "resume", label: "RESUME", icon: <FileTextIcon size={25} /> },
  { id: "my-work", label: "MY WORK", icon: <CodeIcon size={25} /> },
  { id: "contact", label: "CONTACT", icon: <AtIcon size={25} /> },
];

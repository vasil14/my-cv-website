import styled from "styled-components";

export const Sidebar = styled.div`
  position: relative;
  top: 15px;
  border-radius: 10px;
  padding: 12px 0;
  width: 60px;
  text-align: center;
  z-index: 1000;
`;

export const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  font-size: 26px;
  color: black;
  height: 70px;
  width: 75px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
  color: #4caf50;
  transition: color 0.2s ease-in-out;
`;

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: #ffffff;
  border-radius: 5px;
  width: 75px;
`;

export const MenuItem = styled.li`
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

  // Green color for active state
  // &.active {
  //   background: #4caf50;
  //   color: white;
  // }

  &:first-child {
    border-top: none;
  }
`;

export const Icon = styled.div`
  font-size: 20px;
  margin-bottom: 4px;
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

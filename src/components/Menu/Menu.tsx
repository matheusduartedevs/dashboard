import React from "react";
import "./Menu.css";
import { IoDiamond, IoHelp, IoSettingsOutline } from "react-icons/io5";
import { PiNetworkLight } from "react-icons/pi";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  return (
    <ul className="menu-list">
      <MenuItem to="/" icon={IoDiamond} label="Dashboard" isActive={true} />
      <MenuItem to="/" icon={PiNetworkLight} label="Fornecedores" isActive={false} />
      <MenuItem to="/" icon={IoSettingsOutline} label="Settings" isActive={false} />
      <MenuItem to="/" icon={IoHelp} label="Help" isActive={false} />
    </ul>
  );
};

export default Menu;

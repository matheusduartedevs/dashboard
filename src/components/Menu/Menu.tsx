import React from "react";
import "./Menu.css";
import { IoDiamond, IoHelp, IoSettingsOutline } from "react-icons/io5";
import { PiNetworkLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="menu-list">
      <li className="menu-list-item active">
        <Link to="/">
          <IoDiamond />
          Dashboard
        </Link>
      </li>

      <li className="menu-list-item">
        <Link to="/">
          <PiNetworkLight />
          Fornecedores
        </Link>
      </li>

      <li className="menu-list-item">
        <Link to="/">
          <IoHelp />
          Ajuda
        </Link>
      </li>

      <li className="menu-list-item">
        <Link to="/">
          <IoSettingsOutline />
          Configurações
        </Link>
      </li>
    </ul>
  );
};

export default Menu;

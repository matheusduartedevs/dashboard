import { useState } from "react";
import Menu from "../Menu/Menu";
import "./Sidebar.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sidebar-container">
      <div className="sidebar-toggle" onClick={toggle}>
        {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </div>
      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar-logo">LOGO</div>
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;

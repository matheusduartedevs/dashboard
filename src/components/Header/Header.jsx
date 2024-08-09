import { IoLogOutOutline, IoNotifications, IoSearch } from "react-icons/io5";
import "./Header.css";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header-title">Dashboard</h2>

      <div className="search-box">
        <input type="text" placeholder="Pesquisar" />
        <IoSearch className="search-icons"  />
      </div>

      <div className="user-box">
        <IoNotifications className="user-icon" />
        <IoLogOutOutline className="user-icon" />
        <MdOutlineDarkMode className="user-icon" />
      </div>
    </header>
  );
};

export default Header;

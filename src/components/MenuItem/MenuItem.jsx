import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ to, icon: Icon, label, isActive }) => {
  return (
    <li className={`menu-list-item ${isActive ? "active" : ""}`}>
      <Link to={to}>
        <Icon />
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;

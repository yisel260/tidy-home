import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link" >Home </NavLink>

      <NavLink to="/learn" className="nav-link">Learn</NavLink>

      <NavLink to="/ItemSearch" className="nav-link"> Item Search </NavLink>

      <NavLink to="/StoreItems" className="nav-link"> Store Items</NavLink>
    </nav>
  );
};

export default NavBar;
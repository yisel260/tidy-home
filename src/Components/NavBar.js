import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home </NavLink>

      <NavLink
        to="/ItemSearch"
        className="nav-link"
      >
        Item Search
      </NavLink>

      
      <NavLink
        to="/StoreItems"
                className="nav-link"
      >
        Store Items
      </NavLink>
    </nav>
  );
};

export default NavBar;
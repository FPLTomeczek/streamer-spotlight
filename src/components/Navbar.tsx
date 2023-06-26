import { Link } from "react-router-dom";
import { NavbarStyled } from "../styles/Navbar.styled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/streamers">Streamers</Link>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;

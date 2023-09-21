import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <p className="logo">Proyecto</p>

        <div>
          <img alt="logo" src={logo} />
        </div>
      </div>

      <Button />

      <div className="menu-box">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contacto</Link>
      </div>
    </div>
  );
};

export default Navbar;

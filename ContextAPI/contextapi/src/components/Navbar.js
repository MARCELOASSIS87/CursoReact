import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pagina1">Página 1</NavLink>
            <NavLink to="/pagina2">Página 2</NavLink>
            <NavLink to="/pagina3">Página 3</NavLink>
        </nav>
    );
};

export default Navbar
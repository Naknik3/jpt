import "./Menu.css";
import { NavLink } from "react-router-dom";

export function Menu() {
    return (
        <nav className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
}

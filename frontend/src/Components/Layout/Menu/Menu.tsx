import "./Menu.css";
import { NavLink } from "react-router-dom";

// Navigation links — NavLink automatically adds an "active" class to the current route
export function Menu() {
    return (
        <nav className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
}

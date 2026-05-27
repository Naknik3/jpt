import "./Header.css";
import { Menu } from "../Menu/Menu";

// Top bar — shows the app title and the navigation menu
export function Header() {
    return (
        <header className="header">
            <h1>Jpt junior personal trainer</h1>
            <Menu />
        </header>
    );
}

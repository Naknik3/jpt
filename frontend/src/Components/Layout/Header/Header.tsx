import "./Header.css";
import { Menu } from "../Menu/Menu";

export function Header() {
    return (
        <header className="header">
            <h1>Jpt junior personal trainer</h1>
            <Menu />
        </header>
    );
}

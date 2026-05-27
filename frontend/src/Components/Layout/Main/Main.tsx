import "./Main.css";
import { Router } from "../Router/Router";

// Content area — renders whichever screen matches the current URL
export function Main() {
    return (
        <main className="main">
            <Router />
        </main>
    );
}

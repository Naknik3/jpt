import "./Layout.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

// Root layout — wraps the entire app in BrowserRouter (needed for navigation)
// and renders the three main sections: header, content area, and footer
export function Layout() {
    return (
        <BrowserRouter>
            <div className="layout">
                <Header />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

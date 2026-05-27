import "./Layout.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

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

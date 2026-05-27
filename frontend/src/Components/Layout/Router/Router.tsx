import { Routes, Route } from "react-router-dom";
import { Jpt } from "../../../Screens/Jpt/Jpt";
import { About } from "../../../Screens/About/About";
import { NotFound } from "../../../Screens/NotFound/NotFound";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Jpt />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

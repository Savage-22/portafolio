import { BrowserRouter as Router, Routes, Route } from "react-router";


import Dash from './Dash';

export default function Rutas() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Dash/>} />
            </Routes>
        </Router>
    );
}
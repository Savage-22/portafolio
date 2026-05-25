import { BrowserRouter as Router, Routes, Route } from "react-router";


import HomePage from './HomePage';

export default function Rutas() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </Router>
    );
}
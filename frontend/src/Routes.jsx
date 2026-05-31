import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function Rutas() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos/:id" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

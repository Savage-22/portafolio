import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import TimelinePage from './pages/TimelinePage';
import TimelineDetailPage from './pages/TimelineDetailPage';

export default function Rutas() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos/:id" element={<ProjectDetailPage />} />
          <Route path="/trayectoria" element={<TimelinePage />} />
          <Route path="/trayectoria/:id" element={<TimelineDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

import { Outlet } from 'react-router-dom';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

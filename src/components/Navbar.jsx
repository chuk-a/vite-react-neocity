import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "text-brand-700" : "text-gray-700 hover:text-brand-600"
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur border-b">
      <div className="container-narrow h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-bold text-brand-700">
          Heating System Design
        </Link>
        <div className="flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
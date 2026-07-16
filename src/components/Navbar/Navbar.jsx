import { FaFutbol } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaFutbol className="text-cyan-400 text-3xl" />
          <h1 className="text-2xl font-bold text-cyan-400">
            ArenaMind AI
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

          <li>
            <Link to="/" className="hover:text-cyan-400">
              Home
            </Link>
          </li>

          <li>
            <Link to="/chat" className="hover:text-cyan-400">
              AI Assistant
            </Link>
          </li>

          <li>
            <Link to="/navigation" className="hover:text-cyan-400">
              Navigation
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="hover:text-cyan-400">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-cyan-400">
              Contact
            </Link>
          </li>

        </ul>

        {/* Button */}
        <Link
  to="/chat"
  className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
>
  Get Started
</Link>
      </div>
    </nav>
  );
}

export default Navbar;
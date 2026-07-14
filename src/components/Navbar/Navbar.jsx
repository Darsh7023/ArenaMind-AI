function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          🏟 ArenaMind AI
        </h1>

        <ul className="flex gap-8 font-medium">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">AI Assistant</li>
          <li className="hover:text-cyan-400 cursor-pointer">Navigation</li>
          <li className="hover:text-cyan-400 cursor-pointer">Dashboard</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
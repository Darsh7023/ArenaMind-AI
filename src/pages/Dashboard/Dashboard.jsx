import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white p-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">
          📊 Live Stadium Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold">👥 Crowd Level</h2>
            <p className="text-3xl mt-3 text-cyan-400">68%</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold">🌦️ Weather</h2>
            <p className="text-3xl mt-3 text-cyan-400">28°C</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold">⚽ Active Matches</h2>
            <p className="text-3xl mt-3 text-cyan-400">3</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold">🚨 Emergency Alerts</h2>
            <p className="text-3xl mt-3 text-cyan-400">1</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
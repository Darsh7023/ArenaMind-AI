import { FaUsers, FaCar, FaGlobe, FaLeaf, FaShieldAlt, FaCloudSun } from "react-icons/fa";

function Dashboard() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          ⚡ Live Stadium Dashboard
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Crowd */}
          <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
            <FaUsers className="text-4xl mx-auto text-cyan-400" />
            <p className="text-3xl font-bold mt-3">12,540</p>
            <p className="text-gray-400">Live Crowd</p>
          </div>


          {/* Parking */}
          <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
            <FaCar className="text-4xl mx-auto text-yellow-400" />
            <p className="text-3xl font-bold mt-3">82%</p>
            <p className="text-gray-400">Parking Full</p>
          </div>


          {/* Languages */}
          <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
            <FaGlobe className="text-4xl mx-auto text-green-400" />
            <p className="text-3xl font-bold mt-3">18</p>
            <p className="text-gray-400">Languages Supported</p>
          </div>


          {/* Carbon */}
          <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
            <FaLeaf className="text-4xl mx-auto text-lime-400" />
            <p className="text-3xl font-bold mt-3">2.4 Tons</p>
            <p className="text-gray-400">Carbon Saved</p>
          </div>


          {/* Security */}
          <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
            <FaShieldAlt className="text-4xl mx-auto text-red-400" />
            <p className="text-3xl font-bold mt-3">Secure</p>
            <p className="text-gray-400">AI Security Status</p>
          </div>


          {/* Weather */}
          <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
            <FaCloudSun className="text-4xl mx-auto text-blue-400" />
            <p className="text-3xl font-bold mt-3">28°C</p>
            <p className="text-gray-400">Weather Monitoring</p>
          </div>


        </div>

      </div>
    </section>
  );
}

export default Dashboard;
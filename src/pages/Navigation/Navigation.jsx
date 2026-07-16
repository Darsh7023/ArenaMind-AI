import Navbar from "../../components/Navbar/Navbar";

function Navigation() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white p-8">

        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          🗺️ Smart Stadium Navigation
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">🏟️ Stadium Gate A</h2>
            <p className="mt-2 text-gray-300">
              Main entrance for general visitors.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">🚗 Parking</h2>
            <p className="mt-2 text-gray-300">
              Parking available near Gate B.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">🍔 Food Court</h2>
            <p className="mt-2 text-gray-300">
              Food and drinks available on Level 1.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">🚻 Washrooms</h2>
            <p className="mt-2 text-gray-300">
              Washrooms are available on every floor.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">🏥 Medical Center</h2>
            <p className="mt-2 text-gray-300">
              Emergency medical support available 24×7.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">🚪 Emergency Exit</h2>
            <p className="mt-2 text-gray-300">
              Follow the nearest exit signs during emergencies.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Navigation;
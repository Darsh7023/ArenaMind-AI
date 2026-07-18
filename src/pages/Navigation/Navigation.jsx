import Navbar from "../../components/Navbar/Navbar";

function Navigation() {

  const locations = [
    {
      icon: "🏟️",
      title: "Stadium Gate A",
      info: "Main entrance for general visitors.",
      route: "500m from parking zone"
    },
    {
      icon: "🚗",
      title: "Smart Parking",
      info: "AI guided parking with available spaces.",
      route: "Gate B - 200m away"
    },
    {
      icon: "🍔",
      title: "Food Court",
      info: "Food and beverages available on Level 1.",
      route: "Near Section C"
    },
    {
      icon: "🚻",
      title: "Washrooms",
      info: "Facilities available on every floor.",
      route: "Nearest location: Floor 2"
    },
    {
      icon: "🏥",
      title: "Medical Center",
      info: "24×7 emergency medical assistance.",
      route: "Near Gate A"
    },
    {
      icon: "🚨",
      title: "Emergency Exit",
      info: "Follow AI navigation during emergencies.",
      route: "Exit route activated"
    }
  ];


  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white px-6 py-12">

        <h1 className="text-4xl font-bold text-cyan-400 text-center">
          🗺️ Smart Stadium Navigation
        </h1>

        <p className="text-gray-400 text-center mt-3 mb-10">
          AI powered indoor navigation for FIFA World Cup 2026 fans.
        </p>


        <div className="max-w-6xl mx-auto bg-slate-800 rounded-xl p-6 mb-10">

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            📍 Stadium Map Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-center">

            <div className="bg-slate-700 p-4 rounded-lg">
              🚪 Gates
              <br />
              A, B, C
            </div>

            <div className="bg-slate-700 p-4 rounded-lg">
              🚗 Parking
              <br />
              Zones P1-P5
            </div>

            <div className="bg-slate-700 p-4 rounded-lg">
              🏟️ Seating
              <br />
              Sections A-Z
            </div>

          </div>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {locations.map((item,index)=>(

            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >

              <div className="text-4xl mb-3">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold text-cyan-400">
                {item.title}
              </h2>

              <p className="text-gray-300 mt-3">
                {item.info}
              </p>

              <p className="text-green-400 mt-4">
                📍 {item.route}
              </p>

            </div>

          ))}

        </div>


      </div>

    </>
  );
}

export default Navigation;
import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {
  const stats = [
    {
      icon: "🏟️",
      title: "Smart Stadiums",
      value: "16",
      text: "Connected FIFA World Cup 2026 stadiums",
    },
    {
      icon: "👥",
      title: "Live Visitors",
      value: "80,000+",
      text: "Fans using smart services",
    },
    {
      icon: "🚗",
      title: "Parking Zones",
      value: "25+",
      text: "AI guided parking areas",
    },
    {
      icon: "🚨",
      title: "Emergency Support",
      value: "24×7",
      text: "Instant AI assistance",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white px-6 py-12">

        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-4">
          📊 ArenaMind AI Dashboard
        </h1>

        <p className="text-gray-400 text-center mb-10">
          Real-time smart stadium operations and fan experience monitoring.
        </p>


        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {stats.map((item,index)=>(
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >

              <div className="text-4xl mb-3">
                {item.icon}
              </div>

              <h2 className="text-xl font-bold text-cyan-400">
                {item.title}
              </h2>

              <p className="text-3xl font-bold mt-3">
                {item.value}
              </p>

              <p className="text-gray-400 mt-2">
                {item.text}
              </p>

            </div>
          ))}

        </div>


        <div className="max-w-6xl mx-auto mt-10 bg-slate-800 rounded-xl p-6">

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            🤖 AI Operations Status
          </h2>

          <p>
            ✅ Crowd monitoring active
          </p>

          <p>
            ✅ Smart navigation available
          </p>

          <p>
            ✅ Multilingual support enabled
          </p>

          <p>
            ✅ Accessibility assistance active
          </p>

        </div>

      </div>
    </>
  );
}

export default Dashboard;
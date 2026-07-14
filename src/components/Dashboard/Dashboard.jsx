function Dashboard() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Live Stadium Dashboard
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl">👥</h3>
            <p className="text-2xl font-bold mt-2">12,540</p>
            <p>Live Crowd</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl">🚗</h3>
            <p className="text-2xl font-bold mt-2">82%</p>
            <p>Parking Full</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl">🌍</h3>
            <p className="text-2xl font-bold mt-2">18</p>
            <p>Languages</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl">♻️</h3>
            <p className="text-2xl font-bold mt-2">2.4 Tons</p>
            <p>Carbon Saved</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Dashboard;
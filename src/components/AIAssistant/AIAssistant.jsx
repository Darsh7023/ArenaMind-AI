function AIAssistant() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            🤖 AI Stadium Assistant
          </h2>

          <p className="text-gray-400 mb-6">
            Get instant help during the FIFA World Cup 2026.
            Ask about match schedules, stadium directions,
            parking, food courts and emergency services.
          </p>

          <button className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600">
            Try AI Assistant
          </button>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">
            AI Capabilities
          </h3>

          <ul className="space-y-3">
            <li>✅ Smart Navigation</li>
            <li>✅ Multilingual Support</li>
            <li>✅ Live Match Updates</li>
            <li>✅ Crowd Alerts</li>
            <li>✅ Emergency Guidance</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default AIAssistant;
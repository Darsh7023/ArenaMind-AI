import { FaRobot, FaArrowRight, FaCheckCircle } from "react-icons/fa";

function AIAssistant() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaRobot className="text-cyan-400 text-4xl" />
            <h2 className="text-4xl font-bold">
              AI Stadium Assistant
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Get instant AI-powered support during the FIFA World Cup 2026.
            Ask about match schedules, stadium directions, parking,
            food courts, emergency services and accessibility.
          </p>

          <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg">
            Try AI Assistant
            <FaArrowRight />
          </button>
        </div>

        {/* Right Side */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">

          <h3 className="text-2xl font-bold mb-6">
            AI Capabilities
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>Smart Navigation</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>Multilingual Support</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>Live Match Updates</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>Crowd Alerts</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>Emergency Guidance</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AIAssistant;
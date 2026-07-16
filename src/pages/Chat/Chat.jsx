import Navbar from "../../components/Navbar/Navbar";
import ChatBot from "../../components/ChatBot/ChatBot";

function Chat() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6">

        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          🤖 ArenaMind AI Assistant
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mb-8">
          Ask anything about FIFA World Cup 2026, stadium navigation,
          match schedules, crowd updates and fan services.
        </p>

        <div className="w-full max-w-2xl bg-slate-800 rounded-xl p-6 shadow-lg">

          <div className="bg-slate-700 rounded-lg p-4 mb-4">
            <p>
              👋 Hello! I'm ArenaMind AI. How can I help you today?
            </p>
          </div>

          <input
            type="text"
            placeholder="Ask your question..."
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
          />

          <button className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold">
            Send
          </button>

        </div>

      </div>
    </>
  );
}

export default Chat;
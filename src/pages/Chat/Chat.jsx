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

        <ChatBot />

      </div>
    </>
  );
}

export default Chat;
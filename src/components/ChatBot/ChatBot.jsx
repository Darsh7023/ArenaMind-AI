
import { useState } from "react";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "👋 Hello! Welcome to ArenaMind AI. Ask me anything about FIFA World Cup 2026.",
    },
  ]);

  const handleSend = () => {
    if (message.trim() === "") return;

    const userMessage = {
      sender: "You",
      text: message,
    };

    let aiReply =
      "I'm here to help you with FIFA World Cup 2026 information.";

    const msg = message.toLowerCase();

    if (msg.includes("match")) {
      aiReply = "⚽ Match schedules will be displayed here.";
    } else if (msg.includes("stadium")) {
      aiReply = "🏟️ I can help you find stadium information and seating.";
    } else if (msg.includes("parking")) {
      aiReply = "🚗 Parking areas are available near all stadium gates.";
    } else if (msg.includes("food")) {
      aiReply = "🍔 Food courts are available inside the stadium.";
    } else if (msg.includes("exit")) {
      aiReply = "🚪 Follow the nearest emergency exit signs.";
    }

    setMessages([
      ...messages,
      userMessage,
      {
        sender: "AI",
        text: aiReply,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg w-full max-w-2xl">
      <div className="h-80 overflow-y-auto bg-slate-700 rounded-lg p-4 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-3">
            <strong>{msg.sender}: </strong>
            {msg.text}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask your question..."
        className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
      />

      <button
        onClick={handleSend}
        className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold"
      >
        Send
      </button>
    </div>
  );
}

export default ChatBot;
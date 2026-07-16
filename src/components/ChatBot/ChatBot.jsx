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
      "🤖 I can help you with FIFA World Cup 2026 stadium services, matches, navigation and fan support.";

    const msg = message.toLowerCase();

    if (msg.includes("match") || msg.includes("schedule")) {
      aiReply =
        "⚽ FIFA World Cup 2026 match schedules and live updates are available through ArenaMind AI.";
    } 
    else if (msg.includes("stadium") || msg.includes("seat")) {
      aiReply =
        "🏟️ I can help you find stadium information, seating areas and facilities.";
    } 
    else if (msg.includes("parking")) {
      aiReply =
        "🚗 Parking areas are available near all stadium gates.";
    } 
    else if (msg.includes("food")) {
      aiReply =
        "🍔 Food courts are available inside the stadium.";
    } 
    else if (msg.includes("exit") || msg.includes("emergency")) {
      aiReply =
        "🚨 Emergency exits are marked clearly. Follow security instructions for help.";
    } 
    else if (msg.includes("weather")) {
      aiReply =
        "🌦️ Stadium weather monitoring shows comfortable conditions for fans.";
    } 
    else if (msg.includes("ticket")) {
      aiReply =
        "🎟️ Keep your digital ticket ready for entry gate scanning.";
    } 
    else if (msg.includes("medical")) {
      aiReply =
        "🏥 Medical centers are available 24×7 inside the stadium.";
    } 
    else if (msg.includes("crowd")) {
      aiReply =
        "👥 AI Crowd Monitoring suggests less crowded routes for visitors.";
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
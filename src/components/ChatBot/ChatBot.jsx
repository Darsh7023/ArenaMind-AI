import { useState } from "react";

function ChatBot() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "👋 Hello! Welcome to ArenaMind AI. I can help with FIFA World Cup 2026 stadium navigation, parking, matches, crowd updates and fan services.",
    },
  ]);

  const handleSend = () => {
    if (message.trim() === "") return;

    const userText = message.toLowerCase();

    let aiReply =
      "🤖 I can help you with FIFA World Cup 2026 stadium services.";

    if (
      userText.includes("parking") &&
      userText.includes("food")
    ) {
      aiReply =
        "🚗 Parking areas are available near stadium gates. 🍔 Food courts are available inside the stadium with multiple food and beverage options.";
    } 
    
    else if (userText.includes("parking")) {
      aiReply =
        "🚗 Parking areas are available near stadium gates. Follow AI navigation for the nearest parking zone.";
    } 
    
    else if (userText.includes("food")) {
      aiReply =
        "🍔 Food courts are available inside the stadium with multiple food and beverage options.";
    } 
    
    else if (userText.includes("stadium")) {
      aiReply =
        "🏟️ ArenaMind AI can guide you with stadium information, seating areas and visitor facilities.";
    } 
    
    else if (userText.includes("match")) {
      aiReply =
        "⚽ Match schedules and tournament updates are available through ArenaMind AI.";
    } 
    
    else if (userText.includes("crowd")) {
      aiReply =
        "👥 Crowd management system suggests less crowded routes for better fan experience.";
    } 
    
    else if (userText.includes("exit")) {
      aiReply =
        "🚪 Emergency exits are clearly marked. Follow AI navigation for the nearest exit.";
    } 
    
    else if (userText.includes("accessibility")) {
      aiReply =
        "♿ Accessibility support is available for differently-abled visitors.";
    }


    setMessages([
      ...messages,
      {
        sender: "You",
        text: message,
      },
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
        placeholder="Ask about stadium, parking, matches..."
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
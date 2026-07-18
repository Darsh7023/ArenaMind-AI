import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "👋 Hello! Welcome to ArenaMind AI. I can help with FIFA World Cup 2026 stadium navigation, parking, crowd updates, emergency services and fan support.",
    },
  ]);

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });


  const handleSend = async () => {
    if (message.trim() === "") return;


    const userMessage = {
      sender: "You",
      text: message,
    };


    setMessages((prev) => [...prev, userMessage]);

    setMessage("");
    setLoading(true);


    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `
You are ArenaMind AI, a smart FIFA World Cup 2026 stadium assistant.

Help fans with:
- Stadium navigation
- Parking locations
- Crowd management
- Emergency support
- Food courts
- Accessibility services
- Match operations
- Fan experience

Give short, helpful and friendly answers.

User question:
${userMessage.text}
                `,
              },
            ],
          },
        ],
      });


      const aiReply = {
        sender: "AI",
        text:
          response.text ||
          "Sorry, I could not generate a response.",
      };


      setMessages((prev) => [...prev, aiReply]);


    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text: "⚠️ AI service is temporarily unavailable. Please try again.",
        },
      ]);

      console.error("Gemini Error:", error);

    } finally {
      setLoading(false);
    }
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


        {loading && (
          <div className="text-cyan-400">
            🤖 ArenaMind AI is thinking...
          </div>
        )}


      </div>


      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about stadium, parking, matches..."
        aria-label="Ask ArenaMind AI"
        className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
      />


      <button
        onClick={handleSend}
        aria-label="Send message"
        className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold"
      >
        Send
      </button>


    </div>
  );
}


export default ChatBot;
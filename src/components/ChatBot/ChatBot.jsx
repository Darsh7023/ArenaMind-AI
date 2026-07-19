import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

function ChatBot() {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "👋 Hello! Welcome to ArenaMind AI. I can help with FIFA World Cup 2026 stadium navigation, parking, matches, crowd updates and fan services.",
    },
  ]);


  const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

console.log("API KEY:", import.meta.env.VITE_GEMINI_API_KEY);

  const handleSend = async () => {

    if (message.trim() === "") return;


    const userMessage = message;


    setMessages((prev)=>[
      ...prev,
      {
        sender:"You",
        text:userMessage
      }
    ]);


    setMessage("");
    setLoading(true);


    try {


      const response = await ai.models.generateContent({

        model:"gemini-2.5-flash",

        contents:[

          {
            role:"user",

            parts:[
              {
                text:`
You are ArenaMind AI, a smart FIFA World Cup 2026 stadium assistant.

Help fans with:
- Stadium navigation
- Parking
- Food courts
- Match schedules
- Crowd management
- Emergency exits
- Accessibility support

Give short friendly answers.

User question:
${userMessage}

`
              }
            ]
          }

        ]

      });


      const reply =
      response.text ||
      "Sorry, I could not generate a response.";



      setMessages((prev)=>[
        ...prev,
        {
          sender:"AI",
          text:reply
        }
      ]);



    } catch(error){

  console.log("GEMINI ERROR:", error);

  alert(error.message);



      // fallback response

      let fallback =
      "🤖 ArenaMind AI can help you with FIFA World Cup 2026 stadium services.";


      const text=userMessage.toLowerCase();


      if(text.includes("parking")){
        fallback="🚗 Parking zones are available near stadium gates with AI guided navigation.";
      }

      else if(text.includes("food")){
        fallback="🍔 Food courts are available inside the stadium with multiple food options.";
      }

      else if(text.includes("exit")){
        fallback="🚪 Emergency exits are clearly marked. Follow nearest exit signs.";
      }


      setMessages((prev)=>[
        ...prev,
        {
          sender:"AI",
          text:fallback
        }
      ]);

    }


    finally{
      setLoading(false);
    }

  };



  return (

    <div className="bg-slate-800 rounded-xl p-6 shadow-lg w-full max-w-2xl">


      <div className="h-80 overflow-y-auto bg-slate-700 rounded-lg p-4 mb-4">


        {
          messages.map((msg,index)=>(

            <div key={index} className="mb-3">

              <strong>{msg.sender}: </strong>

              {msg.text}

            </div>

          ))
        }


        {
          loading &&

          <div className="text-cyan-400">
            🤖 ArenaMind AI is thinking...
          </div>
        }


      </div>



      <input

        value={message}

        onChange={(e)=>setMessage(e.target.value)}

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
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import ChatBot from "../../components/ChatBot/ChatBot";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            🤖 ArenaMind AI Assistant
          </h2>

          <p className="text-gray-400 text-center mb-10">
            Ask about FIFA World Cup 2026 stadiums, parking,
            crowd updates, emergency services and fan support.
          </p>

          <div className="flex justify-center">
            <ChatBot />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
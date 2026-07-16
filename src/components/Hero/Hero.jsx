import heroImage from "../../assets/hero.png";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 font-semibold mb-3">
            ⚽ FIFA World Cup 2026
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-cyan-400">AI-Powered</span> Smart Stadium Experience
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            ArenaMind AI helps fans, organizers and volunteers with smart
            navigation, crowd management, multilingual support,
            accessibility and real-time AI assistance.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
  to="/chat"
  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
>
  Get Started
  <FaArrowRight />
</Link>

            <a
  href="https://www.youtube.com/results?search_query=fifa+world+cup+2026+stadium"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
>
  <FaPlayCircle />
  Watch Demo
</a>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="ArenaMind AI"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
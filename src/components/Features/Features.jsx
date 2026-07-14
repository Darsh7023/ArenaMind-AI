import {
  FaRobot,
  FaMapMarkedAlt,
  FaUsers,
  FaGlobe,
  FaWheelchair,
  FaLeaf,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Assistant",
    description:
      "Get instant AI-powered help for match schedules, stadium services and FAQs.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Smart Navigation",
    description:
      "Navigate easily to seats, exits, food courts and parking areas.",
  },
  {
    icon: <FaUsers />,
    title: "Crowd Management",
    description:
      "Receive live crowd updates and choose less crowded routes.",
  },
  {
    icon: <FaGlobe />,
    title: "Multilingual Support",
    description:
      "Communicate comfortably in multiple languages during the tournament.",
  },
  {
    icon: <FaWheelchair />,
    title: "Accessibility",
    description:
      "Special assistance for differently-abled visitors with AI guidance.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    description:
      "Promote eco-friendly travel and reduce environmental impact.",
  },
];

function Features() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Smart Stadium Features
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14 text-lg">
          Explore the AI-powered services designed for FIFA World Cup 2026.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="text-5xl text-cyan-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;
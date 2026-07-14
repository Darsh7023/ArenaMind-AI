const features = [
  {
    icon: "🤖",
    title: "AI Assistant",
    description: "Get instant AI-powered help for match schedules, stadium services and FAQs.",
  },
  {
    icon: "🗺️",
    title: "Smart Navigation",
    description: "Navigate easily to seats, exits, food courts and parking areas.",
  },
  {
    icon: "👥",
    title: "Crowd Management",
    description: "Receive live crowd updates and choose less crowded routes.",
  },
  {
    icon: "🌍",
    title: "Multilingual Support",
    description: "Communicate comfortably in multiple languages during the tournament.",
  },
  {
    icon: "♿",
    title: "Accessibility",
    description: "Special assistance for differently-abled visitors with AI guidance.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description: "Promote eco-friendly travel and reduce environmental impact.",
  },
];

function Features() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Smart Stadium Features
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Explore the AI-powered services designed for FIFA World Cup 2026.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
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
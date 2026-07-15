function Contact() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>

        <p className="text-gray-400 mb-10">
          Need help during FIFA World Cup 2026? Contact ArenaMind AI support.
        </p>

        <form className="space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          ></textarea>

          <button
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
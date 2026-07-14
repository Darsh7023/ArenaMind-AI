import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import AIAssistant from "../../components/AIAssistant/AIAssistant";
import Dashboard from "../../components/Dashboard/Dashboard";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AIAssistant />
      <Dashboard />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
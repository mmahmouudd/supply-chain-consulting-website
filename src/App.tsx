import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Pillars from "./components/Pillars";
import Approach from "./components/Approach";
import CaseStudies from "./components/CaseStudies";
import GlobalTeam from "./components/GlobalTeam";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-mist-100 antialiased">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Ticker />
        <Pillars />
        <Approach />
        <CaseStudies />
        <GlobalTeam />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

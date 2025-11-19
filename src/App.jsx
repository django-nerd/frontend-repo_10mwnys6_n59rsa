import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";
import Events from "./components/Events";
import Media from "./components/Media";
import Download from "./components/Download";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <Navbar />
      <Hero />
      <News />
      <Events />
      <Media />
      <Download />
      <Footer />
    </div>
  );
}

export default App;

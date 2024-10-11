import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Culture from "./components/Culture";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Home />
      <Brands />
      <Services />
      <Testimonials />
      <Culture />
      <Team />
      <Contact />
    </main>
  );
}

export default App;

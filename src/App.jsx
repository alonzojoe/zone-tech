import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Home />
      <Brands />
      <Services />
      <Testimonials />  
    </main>
  );
}

export default App;

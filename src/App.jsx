import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brands from "./components/Brands";
function App() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Home />
      <Brands />
    </main>
  );
}

export default App;

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Accessoires from "./pages/Accessoires";
import Consoles from "./pages/Consoles";
import Controller from "./pages/Controller";
import Games from "./pages/Games";
import OnSale from "./pages/OnSale";
import Products from "./pages/Products";
import TopProduct from "./pages/TopProduct";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/topProduct" element={<TopProduct />} />
          <Route path="/games" element={<Games />} />
          <Route path="/consoles" element={<Consoles />} />
          <Route path="/controller" element={<Controller />} />
          <Route path="/accessoires" element={<Accessoires />} />
          <Route path="/onSale" element={<OnSale />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

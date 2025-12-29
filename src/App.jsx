import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import RefreshH2O from "./pages/RefreshH2O";
import ECommerce from "./pages/ECommerce";
import Transport from "./pages/Transport";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0f172a] text-white min-h-screen pt-9">
      <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/refreshh2o" element={<RefreshH2O />} />
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/transport" element={<Transport />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
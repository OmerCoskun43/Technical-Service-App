import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { NavbarSimple } from "./components/Navbar";
import Bulasik from "./pages/Bulasik";
import Camasir from "./pages/Camasir";
import TV from "./pages/TV";
import Footer from "./components/Footer";
import Galeri from "./pages/Galeri";
import Kombi from "./pages/Kombi";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarSimple />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kombi" element={<Kombi />} />
        <Route path="/bulasik" element={<Bulasik />} />
        <Route path="/camasir" element={<Camasir />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

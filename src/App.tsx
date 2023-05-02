import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import MedicalEquipments from "@/scenes/medicalEquipments";
import Books from "@/scenes/books/index";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useState, useEffect } from "react";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Router>
        <Navbar isTopOfPage={isTopOfPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/medical-equipments" element={<MedicalEquipments />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

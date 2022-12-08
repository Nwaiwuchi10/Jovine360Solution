import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import AboutUs from "./Screens/About/AboutUs";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/footer/Footer";
import ServiceScreen from "./Screens/Services/ServiceScreen";

import ContactUsScreen from "./Screens/ContactUs/ContactUsScreen";

function App() {
  return (
    <div>
      <TopNav />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<ServiceScreen />} />
        <Route path="/contact-us" element={<ContactUsScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

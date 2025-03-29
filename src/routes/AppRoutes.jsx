import { BrowserRouter, Routes, Route } from "react-router";
import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

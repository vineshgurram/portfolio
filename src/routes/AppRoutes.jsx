import { HashRouter, Routes, Route } from "react-router";
import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import PageNotFound from "../pages/PageNotFound";
export default function AppRoutes() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

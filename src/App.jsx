import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SejaVoluntario from "./pages/sejaVoluntario/SejaVoluntario";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./globalStyler.scss";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntario" element={<SejaVoluntario />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

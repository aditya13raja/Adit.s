import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MenSection from "./pages/MenSection";
import WomenSection from "./pages/WomenSection";
import KidsSection from "./pages/KidsSection";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/men-section" element={<MenSection />} />
        <Route path="/women-section" element={<WomenSection />} />
        <Route path="/kids-section" element={<KidsSection />} />
        <Route path="/product" element={<ProductDetail />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

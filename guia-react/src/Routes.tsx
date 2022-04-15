import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/carrinho";
import { Catalog } from "./pages/catalogo";
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
};

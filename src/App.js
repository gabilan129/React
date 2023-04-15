import "./App.css";
import NavBar from "./Componentes/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListConteiner from "./Componentes/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./Componentes/ItemDetailContainer/ItemDetailConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { NotificacionProvider } from "./Notificaciones/Notificaciones";
import CartView from "./Componentes/CartView/CartView";
import Checkout from "./Componentes/CheckOut/CheackOut";

function App() {
  return (
    <div className="divPadre">
      <BrowserRouter>
        <NotificacionProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListConteiner
                    greeting={"Bienvenidos A Mi Pagina De React"}
                  />
                }
              />
              <Route
                path="/categoria/:categoriaId"
                element={<ItemListConteiner greeting={"productos filtrados"} />}
              />
              <Route path="/item/:itemId" element={<ItemDetailConteiner />} />
              <Route path="/cart" element={<CartView/>} />
              <Route path="/checkout" element={<Checkout/>} />
            </Routes>
          </CartProvider>
        </NotificacionProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

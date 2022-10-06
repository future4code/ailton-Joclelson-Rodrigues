import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CartPage from "../pages/cart/CartPage";
import RequestPage from "../pages/requests/RequestPage";
import Header from "../components/Header/Header";
import useRequestData from "../Hooks/useRequestData";
import { BASE_URL } from "../constants/Urls";

const Router = () => {
  const { data, loading, cart, setCart } = useRequestData(
    `${BASE_URL}/products`
  );

  const addPoduct = (id) => {
    const check = cart.some((product) => product.id === id);

    if (!check) {
      const productCart = data.filter((product) => product.id === id);

      productCart[0].qtyStock = 1;

      setCart([...cart, ...productCart]);
    }

    // const productCart = data.filter((product) => product.id === id);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index
          element={
            <HomePage data={data} loading={loading} addPoduct={addPoduct} />
          }
        />
        <Route path="/pedidos" element={<RequestPage cart={cart} />} />
        <Route path="/carrinho" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

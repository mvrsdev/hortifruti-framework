import React, { useContext } from 'react';
import { Cart, CartContext, Footer, Header, ProductList } from '../components';

const Ecommerce = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <ProductList />
        <Cart />
        <Footer />
      </CartContext.Provider>
    </>
  );
};

export default Ecommerce;

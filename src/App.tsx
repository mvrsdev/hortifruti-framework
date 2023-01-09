import React, { useState } from 'react';
import { CartContext } from './components';
import Ecommerce from './pages/Ecommerce';
import { LoginContext } from './pages';

interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Ecommerce cart={cart} setCart={setCart} />
      </CartContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;

import React, { useState } from 'react';
import { CartContext } from './components';
import Ecommerce from './pages/Ecommerce';

interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  },
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Ecommerce cart={cart} setCart={setCart} />
    </CartContext.Provider>
  );
}

export default App;

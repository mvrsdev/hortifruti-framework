import React from 'react';
import { CartItem } from '../components/index';

interface CartItem {
  product: {
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
}
interface CheckoutProps {
  items: CartItem[];
}

const Checkout: React.FC<CheckoutProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <CartItem
          key={item.product.name}
          product={item.product}
          quantity={item.quantity}
          onRemove={() => null}
        />
      ))}
      <form>
        <label>
          Payment Method:
          <input type="text" />
        </label>
        <br />
        <label>
          Shipping Address:
          <input type="text" />
        </label>
      </form>
      <button>Purchase</button>
    </div>
  );
};

export default Checkout;

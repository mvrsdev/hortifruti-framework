import { createContext, Dispatch, SetStateAction } from 'react';
import apple from '../assets/img/apple.png';
import pear from '../assets/img/pear.png';
import banana from '../assets/img/banana.png';
import pineapple from '../assets/img/pineapple.png';
import mango from '../assets/img/mango.png';

export interface CartItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
}

interface CartContextType {
  cart: CartItemProps[];
  setCart: Dispatch<SetStateAction<CartItemProps[]>>;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

export default CartContext;

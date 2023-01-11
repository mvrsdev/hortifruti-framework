import { createContext, Dispatch, SetStateAction } from 'react';


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

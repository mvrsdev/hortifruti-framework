import React, { useState } from 'react';
import { CartItem, Checkout } from './index';
import { MdArrowForwardIos } from 'react-icons/md';
import apple from '../assets/img/apple.png';
import pear from '../assets/img/pear.png';
import banana from '../assets/img/banana.png';
import pineapple from '../assets/img/pineapple.png';
import mango from '../assets/img/mango.png';
import styled from 'styled-components';

interface CartItem {
  product: {
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
}

const CartContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 8px 16px;
  padding: 16px;
`;

const CheckoutButton = styled.button`
  transition: all 190ms;
  height: 36px;
  min-width: 88px;
  border-radius: 4px;
  background-color: #ff4e4e;
  color: #fff;
  border: 1px solid #ff4e4e;
  font-size: 16px;
  font-weight: bolder;
  padding: 0 88px;
  cursor: pointer;
  &:hover {
    border: 1px solid #ff4e4e;
    filter: brightness(115%);
    box-shadow: 0 1px 2px 0 rgb(66 133 244 / 30%),
      0 1px 3px 1px rgb(66 133 244 / 15%);
  }
`;

const CheckoutButtonContainer = styled.div`
align-self: center;
`;

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      product: {
        name: 'Apple',
        price: 0.99,
        image: apple,
      },
      quantity: 1,
    },
    {
      product: {
        name: 'Pear',
        price: 0.89,
        image: pear,
      },
      quantity: 2,
    },
  ]);

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const initiateCheckout = () => {
    setIsCheckingOut(true);
  };

  const removeFromCart = (product: { name: string }) => {
    const newItems = items.filter((item) => item.product.name !== product.name);
    setItems(newItems);
  };

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      {items.map((item) => (
        <CartItem
          key={item.product.name}
          product={item.product}
          quantity={item.quantity}
          onRemove={() => removeFromCart(item.product)}
        />
      ))}
      <TotalContainer>
        <span>Total Quantity: {totalQuantity}</span>
        <span>Total Price: ${totalPrice}</span>
      </TotalContainer>
      <CheckoutButtonContainer>
      {!isCheckingOut && (
        <CheckoutButton onClick={initiateCheckout}>Checkout<MdArrowForwardIos/></CheckoutButton>
      )}
      {isCheckingOut && <Checkout items={items} />}
      </CheckoutButtonContainer>
    </CartContainer>
  );
};

export default Cart;

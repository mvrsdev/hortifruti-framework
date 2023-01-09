import React from 'react';
import styled from 'styled-components';
import { CartItemProps } from '../components/CartContext';
import { Button, CartItem } from '../components/index';

const CheckoutWrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1px 16px 16px 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vw;
  border: 1px solid #f0f0f0;
  text-align: center;
`;
interface CheckoutProps {
  items: CartItemProps[];
}

const Checkout: React.FC<CheckoutProps> = ({ items }) => {
  return (
    <CheckoutWrapper>
      <h1>Shopping Cart</h1>
      {items.map((item) => (
        <CartItem
          key={item.product.name}
          product={item.product}
          quantity={item.quantity}
          onRemove={() => null} id={0}        />
      ))}
      <Button onClick={() => null}>Purchase</Button>
    </CheckoutWrapper>
  );
};

export default Checkout;

import React, { useState } from 'react';
import { Button, CartItem, Checkout } from './index';
// import { MdArrowForwardIos } from 'react-icons/md';
import apple from '../assets/img/apple.png';
import pear from '../assets/img/pear.png';
import banana from '../assets/img/banana.png';
import pineapple from '../assets/img/pineapple.png';
import mango from '../assets/img/mango.png';
import styled from 'styled-components';

interface CartItemProps {
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

const CheckoutButtonContainer = styled.div`
  align-self: center;
`;

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItemProps[]>([
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
      {!isCheckingOut && (
        <CheckoutButtonContainer>
          <Button width={250} onClick={initiateCheckout}>
            Checkout
          </Button>
        </CheckoutButtonContainer>
      )}
      {isCheckingOut && <Checkout items={items} />}
    </CartContainer>
  );
};

export default Cart;

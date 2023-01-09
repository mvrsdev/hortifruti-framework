import jsPDF from 'jspdf';
import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import CartContext, { CartItemProps } from '../components/CartContext';
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
  const { cart } = useContext(CartContext);

  const totalPrice = useMemo(
    () =>
      cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [cart]
  );

const purchaseHandler = () => {
  const pdf = new jsPDF();

  pdf.text('Receipt', 93, 15);

  items.forEach((item, index) => {
    pdf.text(`${item.product.name}:\nQuantity: ${item.quantity}     x     Price: $${item.product.price}`, 20, 40 + (index * 20))
  });

  pdf.text(`Total: $${totalPrice.toFixed(2)}`, 160, 155)

  pdf.save('RECEIPT.pdf');
};
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
      <Button onClick={purchaseHandler}>Purchase</Button>
    </CheckoutWrapper>
  );
};

export default Checkout;

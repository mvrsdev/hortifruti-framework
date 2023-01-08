import React, { useContext, useState } from 'react';
import { Button, CartContext, CartItem, Checkout } from './index';

import styled from 'styled-components';
import { CartItemProps } from './CartContext';

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
  const { cart, setCart } = useContext(CartContext)
  const [items, setItems] = useState<CartItemProps[]>(cart);



  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const initiateCheckout = () => {
    setIsCheckingOut(true);
  };

  const removeFromCart = (product: { name: string }) => {
    const newItems = items.filter((item) => item.product.name !== product.name);
    setItems(newItems);
    setCart(newItems);
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

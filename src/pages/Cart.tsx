import React, { useContext, useMemo, useState } from 'react';
import { Button, CartContext, Footer } from '../components/index';
import { Checkout } from './index';
import styled from 'styled-components';
import { Modal } from '@mui/material';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ItemsContainer = styled.div`
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  padding: 32px;
`;

const StyledSpan = styled.span`
  margin: 8px;
`;

const CheckoutButtonContainer = styled.div`
  align-self: center;
`;

const Cart: React.FC = () => {
  const { cart } = useContext(CartContext);
  const [isModal, setIsModal] = useState(false);

  // const removeFromCart = (product: { name: string }) => {
  //   const newItems = cart.filter((item) => item.product.name !== product.name);
  //   setCart(newItems);
  // };

  const totalPrice = useMemo(
    () =>
      cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [cart]
  );

  const closeHandler = () => {
    setIsModal(false);
  };

  const startCheckout = () => {
    setIsModal(true)
  }

  return (
    <>
      <CartContainer>
        {cart.length >= 1 ? (
          <Footer>
            <ItemsContainer>
              {cart.map((item) => (
                <StyledSpan>
                  {item.product.name} x {item.quantity}
                </StyledSpan>
              ))}
            </ItemsContainer>
            <CheckoutButtonContainer>
              <Button width={180} onClick={() => startCheckout()}>
                Total ${totalPrice.toFixed(2)}
              </Button>
            </CheckoutButtonContainer>
          </Footer>
        ) : null};
      <Modal
        open={isModal}
        onClose={() => closeHandler()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Checkout items={cart} />
      </Modal>
      </CartContainer>
    </>
  );
};

export default Cart;

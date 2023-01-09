import React, { useContext } from 'react';
import styled from 'styled-components';
import CartContext from './CartContext';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 8px 16px;
  margin: 16px 10px;
  justify-content: space-between;
  background-color: #fff;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const ButtonContainer = styled.button`
  background: none;
  border: none;
  color: #ff4e4e;
  font-size: 24px;
  font-weight: lighter;
  cursor: pointer;
  &:hover {
    filter: brightness(85%);
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4e4e;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
  }
`;

const TotalInput = styled.input`
  display: inline-flex;
  font-size: 1rem;
  max-width: 40px;
  height: 32px;
  border-radius: 4px;
  align-items: center;
  border: 1px solid #dbdbdb;
  color: #444e5e;
  text-align: center;
  margin: 0 10px;
`;

interface CartItemProps {
  id: number;
  product: {
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity, onRemove }) => {
  const { cart, setCart } = useContext(CartContext);

  const cartIncrement = (index: number) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
  };

  const cartDecrement = (index: number) => {
    const newCart = [...cart];
    newCart[index].quantity--;
    setCart(newCart);
  };

  const index = cart.findIndex((item) => item.product === product);

  const removeFromCart = (product: { name: string }) => {
    const newItems = cart.filter((item) => item.product !== product);
    setCart(newItems);
  };
  
  

  return (
    <ItemContainer>
      <img src={product.image} alt={product.name} width={60} height={60} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <QuantityContainer>
        <ButtonContainer onClick={() => cartDecrement(index)}>
          -
        </ButtonContainer>
        <TotalInput type="text" value={quantity} />
        <ButtonContainer onClick={() => cartIncrement(index)}>
          +
        </ButtonContainer>
      </QuantityContainer>
      <RemoveButton onClick={() => removeFromCart(product)}>REMOVE</RemoveButton>

    </ItemContainer>
  );
};

export default CartItem;

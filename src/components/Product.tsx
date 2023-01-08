import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  align-items: center;
  height: 'auto';
  width: 200px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  margin: 8px 24px;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0 0 10px 5px #f7f7f7;
  }
`;

const InfoContainer = styled.div`
margin: 8px 0 0 0;
padding: 1px 12px;
flex-grow: 1;
width: 176px;
background-color: #fafafa;
border-radius: 0 0 8px 8px;
color: #444e5e;
`;

const PriceContainer = styled.p`
    color: #ff4e4e;
    font-weight: 600;
`;

  const ButtonContainer = styled.button`
    position: relative;
    top: 40px;
    right: -64px;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    border: 1px solid white;
    background: #ff4e4e;
    font-size: 36px;
    color: white;
    font-weight: lighter;
    &:hover {
      filter: brightness(93%)
    }
  `;

export interface ProductProps {
  id?: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

const Product: React.FC<ProductProps> = ({
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <ProductContainer>
        <img src={image} alt={name} width={150} height={150}/>
        <ButtonContainer onClick={() => onAddToCart()}>+</ButtonContainer>
      <InfoContainer>
        <h3>{name}</h3>
        <PriceContainer>${price}</PriceContainer>
      </InfoContainer>
    </ProductContainer>
  );
};

export default Product;

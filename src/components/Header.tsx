import React from 'react';
import styled from 'styled-components';
import { LoginButton } from './index';
import shoppingCart from '../assets/img/shopping-cart.png';

const HeaderRow = styled.div`
  display: flex;
  height: 60px;
  padding: 8px 16px;
  justify-content: space-between;
  color: #000000de;
  align-items: center;
  font-size: 14px;
`;

const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
cursor: pointer;
h1 {
  margin-left: 8px;
}
`;

const Header: React.FC = () => {
  return (
      <HeaderRow>
        <LogoContainer>
        <img src={shoppingCart} alt='Shopping Cart' width={26} height={26}/>
        <h1>Hortifruti Framework</h1>
        </LogoContainer>
      <LoginButton onClick={() => null}/>
      </HeaderRow>
  );
};

export default Header;

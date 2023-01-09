import React, { useContext } from 'react';
import styled from 'styled-components';
import { LoginButton } from './index';
import shoppingCart from '../assets/img/shopping-cart.png';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../pages';

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
  const { isLogged } = useContext(LoginContext);

  const navigate = useNavigate();
  const loginClickHandler = () => {
    navigate('/login');
  };

  return (
    <HeaderRow>
      <LogoContainer>
        <img src={shoppingCart} alt="Shopping Cart" width={26} height={26} />
        <h1>Hortifruti Framework</h1>
      </LogoContainer>
      {isLogged ? (
        <div>Olá usuário</div>
      ) : (
        <LoginButton onClick={loginClickHandler} />
      )}
    </HeaderRow>
  );
};

export default Header;

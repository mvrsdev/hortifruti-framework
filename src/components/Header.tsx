import React from 'react';
import styled from 'styled-components';
import { LoginButton } from './index';

const HeaderRow = styled.div`
  display: flex;
  height: 60px;
  padding: 0 8px;
  justify-content: space-between;
  color: #000000de;
  align-items: center;
  font-size: 14px;
`;

const Header: React.FC = () => {
  return (
    <>
      <HeaderRow>
        <h1>Hortifruti Framework</h1>
      <LoginButton onClick={() => null}/>
      </HeaderRow>
    </>
  );
};

export default Header;

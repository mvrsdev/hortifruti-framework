import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
transition: all 190ms;
  min-height: 36px;
  min-width: 64px;
  border-radius: 4px;
  background-color: #1a73e8;
  color: #fff;
  border: 1px solid #1a73e8;
  font-size: 14px;
  font-weight: 600;
  padding: 0 16px;
  cursor: pointer;
  &:hover {
        border: 1px solid #1a73e8;
        filter: brightness(105%);
        box-shadow: 0 1px 2px 0 rgb(66 133 244 / 30%),
          0 1px 3px 1px rgb(66 133 244 / 15%);
      }

  &:active {
    filter: brightness(85%);
  }
`;

interface Props {
  onClick: () => void;
}

const LoginButton: React.FC<Props> = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      Login
    </ButtonContainer>
  );
};

export default LoginButton;

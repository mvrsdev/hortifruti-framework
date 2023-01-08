import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  width?: number;
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled.button`
  transition: all 190ms;
  min-height: 36px;
  min-width: 64px;
  border-radius: 4px;
  background-color: #ff4e4e;
  color: #fff;
  border: 1px solid #ff4e4e;
  font-size: 14px;
  font-weight: 600;
  padding: 0 16px;
  cursor: pointer;
  &:hover {
        border: 1px solid #ff4e4e;
        filter: brightness(115%);
        box-shadow: 0 1px 2px 0 rgb(66 133 244 / 30%),
          0 1px 3px 1px rgb(66 133 244 / 15%);
      }

  /* &:active {
    filter: brightness(85%);
  } */
`;

const Button: React.FC<ButtonProps> = ({ children, onClick, width }) => {
  return <StyledButton style={{width:width}} onClick={onClick}>{children}</StyledButton>;
};

export default Button;

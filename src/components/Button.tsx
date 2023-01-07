import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  value: string;
}

const StyledButton = styled.button`
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
    filter: brightness(93%);
  }
`;

const Button: React.FC<ButtonProps> = ({ value }) => {
  return <StyledButton>{value}</StyledButton>;
};

export default Button;

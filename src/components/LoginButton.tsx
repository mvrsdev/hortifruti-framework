import React from 'react';
import { Button } from './index';

interface Props {
  onClick: () => void;
}

const LoginButton: React.FC<Props> = ({ onClick }) => {
  return <Button onClick={onClick}>Login</Button>;
};

export default LoginButton;

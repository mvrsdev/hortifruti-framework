import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from './index';
import { ProductProps } from './Product';

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  line-height: 65px;
  background-color: #363f4d;
  padding: 0 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const ContentRow = styled.div`
  display: flex;
justify-content: flex-end;
width: 100vw;
`;

interface FooterProps {
  products?: ProductProps;
}

const Footer: FC<FooterProps> = () => {
  return (
    <FooterRow>
      <ContentRow>
        <Button width={144} onClick={() => null}>Total</Button>
      </ContentRow>
    </FooterRow>
  );
};

export default Footer;

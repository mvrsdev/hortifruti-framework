import React from 'react';
import { Header, ProductList } from '../components';
import Cart from './Cart';

const HomePage = () => {

  return (
    <>
      <Header />
      <ProductList />
      <Cart/>
    </>
  );
};

export default HomePage;

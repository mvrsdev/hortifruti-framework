import React, { useState } from 'react';
import { Product } from './index';
import apple from '../assets/img/apple.png';
import pear from '../assets/img/pear.png';
import banana from '../assets/img/banana.png';
import pineapple from '../assets/img/pineapple.png';
import mango from '../assets/img/mango.png';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const ProductList: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Apple',
      price: 0.99,
      image: apple,
    },
    {
      id: 2,
      name: 'Pear',
      price: 0.89,
      image: pear,
    },
    {
      id: 3,
      name: 'Banana',
      price: 0.79,
      image: banana,
    },
    {
      id: 4,
      name: 'Pineapple',
      price: 1.99,
      image: pineapple,
    },
    {
      id: 5,
      name: 'Mango',
      price: 1.49,
      image: mango,
    },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState('');

  const filteredProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  const addToCart = (product: Product) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.product.id === product.id);
    if (index === -1) {
      newCart.push({ product, quantity: 1 });
    } else {
      newCart[index].quantity++;
    }
    setCart(newCart);
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ProductListContainer>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </ProductListContainer>
    </>
  );
};

export default ProductList;

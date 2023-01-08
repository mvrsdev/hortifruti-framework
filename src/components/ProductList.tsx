import React, { useContext, useState } from 'react';
import { CartContext, Product, SearchInputField } from './index';
import styled from 'styled-components';
import apple from '../assets/img/apple.png';
import pear from '../assets/img/pear.png';
import banana from '../assets/img/banana.png';
import pineapple from '../assets/img/pineapple.png';
import mango from '../assets/img/mango.png';
import { CartItemProps } from './CartContext';

const ProductListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductList: React.FC = ({ setCart }: { setCart: (items: CartItemProps[]) => void }) => {
  const [products] = useState<ProductProps[]>([
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

  const [search, setSearch] = useState('');
  const filteredProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  const { cart } = useContext(CartContext);
  
  const addToCart = (product: ProductProps) => {
    const newCart = [...cart];

    const index = newCart.findIndex((item) => item.product.id === product.id);
    if (index === -1) {
      newCart.push({
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        },
        quantity: 1,
      });
    } else {
      newCart[index].quantity++;
    }
    setCart(newCart);
  };

  return (
    <BodyContainer>
      <SearchInputField
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      ;
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
    </BodyContainer>
  );
};

export default ProductList;

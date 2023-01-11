import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartItemProps } from '../components/CartContext';
import { HomePage, Login } from './index';

interface EcommerceProps {
  cart: CartItemProps[];
  setCart: React.Dispatch<React.SetStateAction<CartItemProps[]>>;
}

const Ecommerce: React.FC<EcommerceProps> = ({ cart, setCart }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<p>Page not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Ecommerce;

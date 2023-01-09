import { createContext, Dispatch, SetStateAction } from 'react';

interface LoginContextProps {
  isLogged: boolean
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

export const LoginContext = createContext<LoginContextProps>({
  isLogged: false,
  setIsLogged: () => {},
});

export default LoginContext;

import { login } from './utils';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import{ LoginContext }from './index';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  margin: 0 0 0 16px;
  &:focus {
    border-color: #ff4e4e;
  }
`;

const ButtonWrapper = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #fff;
  cursor: pointer;
  transition: border-color 0.25s;
  background-color: #ff4e4e;
  display: block;
  width: 100%;
  &:disabled {
    color: #bababa;
    background-color: #f2f2f2;
    &:hover {
      filter: brightness(90%);
    }
  }
  &:hover {
    filter: brightness(115%);
  }
  &:active {
    border-color: #ff4e4e;
  }
`;

const LoginRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
`;

const Error = styled.div`
  color: red;
  display: block;
  background: rgba(255, 0, 0, 0.1);
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 6px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const { isLogged, setIsLogged } = useContext(LoginContext);

  const emailHandler = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setEmail(value);
  };

  const passwordHandler = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setPassword(value);
  };

  const navigate = useNavigate();

  const loginClickHandler = () => {
    navigate('/');
  };

  const submitHandler = () => {
    setError(null);
    setIsRequesting(true);
    setIsLogged(true);

    let values = { email: email, password: password };
    login(values)
      .then(() => {
        loginClickHandler();
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsRequesting(false);
      });
  };

  return (
    <Wrapper>
      <div>
        <h1>Login</h1>
        {error && <Error>{error}</Error>}
        <LoginRow>
          <label htmlFor={'email'}>Email</label>
          <Input
            id={'email'}
            type={'email'}
            autoComplete="off"
            value={email}
            onChange={emailHandler}
          />
        </LoginRow>
        <LoginRow>
          <label htmlFor={'password'}>Password</label>
          <Input
            id={'password'}
            type={'password'}
            value={password}
            onChange={passwordHandler}
          />
        </LoginRow>
        <LoginContext.Provider value={{ isLogged, setIsLogged }}>
          <ButtonWrapper
            disabled={email === '' || password.length < 6 || isRequesting}
            onClick={submitHandler}
          >
            Login
          </ButtonWrapper>
        </LoginContext.Provider>
      </div>
    </Wrapper>
  );
};

export default Login;

import { login } from './utils';
import { useState } from 'react';
import styled from 'styled-components';

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

const ButtonWrapper = styled.div`
  button {
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

    &:hover {
      filter: brightness(115%);
    }
    &:active {
      border-color: #ff4e4e;
    }
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

  const emailHandler = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setEmail(value);
  };

  const passwordHandler = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setPassword(value);
  };

  const submitHandler = () => {
    setError(null);
    setIsRequesting(true);

    let values = { email: email, password: password };
    login(values)
      .then(() => {
        alert(`You're logged in!`);
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

        <ButtonWrapper>
          <button
            disabled={email === '' || password.length < 6 || isRequesting}
            onClick={submitHandler}
          >
            Login
          </button>
        </ButtonWrapper>
      </div>
    </Wrapper>
  );
};

export default Login;

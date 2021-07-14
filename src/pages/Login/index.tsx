import React, { useContext, useState } from 'react';
import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useContext(AuthContext);

  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleChangePassword = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await handleLogin({ email, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.StyledCard>
        <S.StyledCardContent>
          <Typography
            variant="h5"
            component="h2"
            className="form-title"
            align="center"
          >
            Login
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              className="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              onChange={handleChangeEmail}
            />
            <TextField
              className="outlined-basic"
              label="Senha"
              name="password"
              variant="outlined"
              type="password"
              onChange={handleChangePassword}
            />
            <Button variant="contained" color="primary" type="submit">
              Entrar
            </Button>
          </form>
        </S.StyledCardContent>
      </S.StyledCard>
    </S.Container>
  );
};

export default Login;

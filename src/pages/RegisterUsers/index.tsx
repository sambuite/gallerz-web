import React, { useState } from 'react';
import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import api from '../../services/api';
import history from '../../history';

const RegisterUsers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setName(value);
  };

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
      await api.post('/register-user', { name, email, password });
      history.push('/');
    } catch (e) {
      console.error(e);
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
            Cadastro
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              className="outlined-basic"
              label="Nome"
              name="name"
              variant="outlined"
              onChange={handleChangeName}
            />
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
              Cadastrar
            </Button>
          </form>
        </S.StyledCardContent>
      </S.StyledCard>
    </S.Container>
  );
};

export default RegisterUsers;

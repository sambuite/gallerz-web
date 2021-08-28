import React, { useState } from 'react';
import api from '../../services/api';
import history from '../../history';
import { Link } from 'react-router-dom';

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
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
          <a
            href="#"
            className="bg-primary-500 text-white font-bold text-xl p-4"
          >
            GALLERZ
          </a>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Junte-se a nós.</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="name" className="text-lg">
                Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="Seu Nome"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChangeName}
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="seuemail@email.com"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChangeEmail}
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">
                Senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChangePassword}
              />
            </div>

            {/* <div className="flex flex-col pt-4">
              <label htmlFor="confirm-password" className="text-lg">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="********"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div> */}

            <input
              type="submit"
              value="Cadastrar-se"
              className="bg-primary-500 text-white font-bold text-lg hover:bg-primary-700 p-2 mt-8 cursor-pointer"
            />
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Já tem uma conta?{' '}
              <Link
                to="/login"
                className="underline font-semibold text-primary-500"
              >
                Entre aqui.
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://source.unsplash.com/collection/857397"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default RegisterUsers;

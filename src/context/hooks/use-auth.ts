import { useState, useEffect } from 'react';
import history from '../../history';
import api from '../../services/api';
import { LoginType } from '../AuthContext';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('@auth');

    if (auth) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(auth).token}`;
      setAuthenticated(true);

      setUserId(JSON.parse(auth).userId);
    }

    setLoading(false);
  }, []);

  async function handleLogin(login: LoginType, to?: string) {
    const { data } = await api.post('/login', { ...login });

    localStorage.setItem('@auth', JSON.stringify(data));
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    setAuthenticated(true);
    history.push(to || '/');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('@auth');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return { userId, authenticated, loading, handleLogin, handleLogout };
}

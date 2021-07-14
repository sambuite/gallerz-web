import React, { createContext } from 'react';

import useAuth from './hooks/use-auth';

export type LoginType = { email: string; password: string };

type AuthContextType = {
  loading: boolean;
  authenticated: boolean;
  handleLogin: (email: LoginType) => Promise<void>;
  handleLogout: () => void;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider
      value={{ loading, authenticated, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

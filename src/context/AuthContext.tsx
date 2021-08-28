import React, { createContext } from 'react';

import useAuth from './hooks/use-auth';

export type LoginType = { email: string; password: string };

type AuthContextType = {
  loading: boolean;
  userId: string;
  authenticated: boolean;
  handleLogin: (email: LoginType, to?: string) => Promise<void>;
  handleLogout: () => void;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { userId, authenticated, loading, handleLogin, handleLogout } =
    useAuth();

  return (
    <AuthContext.Provider
      value={{ userId, loading, authenticated, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

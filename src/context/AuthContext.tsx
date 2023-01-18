// Definir como luce, que información voy a tener aquí

import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado incial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Lo usaremos para decirle a React como luce y que expone el context

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}
// Crear el contexto:

export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};

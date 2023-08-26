/* eslint-disable no-unused-vars */

import { createContext } from 'react';

export const AuthContext = createContext({
  token: null,
  authenticate: async (email, senha) => {},
  kanban: (status) => {},
  logout: () => {},
});

import { AuthContext } from './Context';
import { useStorage } from '../../util/useStorage';
import { LoginRequest } from './utils';

// eslint-disable-next-line
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');

  const authenticate = async (email, senha) => {
    const response = await LoginRequest(email, senha);

    const payload = { token: response.IDUser, email, nome: response.nome, kanbanActive: false };

    setToken(payload);
  };

  const kanban = async (status) => {
    setToken({
      ...token,
      kanbanActive: status,
    });
  };

  const logout = async () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        ...token,
        authenticate,
        kanban,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

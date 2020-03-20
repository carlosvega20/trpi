import React from 'react';
import { Auth } from 'aws-amplify';
import awsExports from '../../aws-exports';

export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    Auth.configure(awsExports);
    Auth.currentAuthenticatedUser()
      .then((_user) => setUser(_user))
      .catch(() => setUser(null));
  }, []);

  const login = (usernameOrEmail, password) =>
    Auth.signIn(usernameOrEmail, password)
      .then((cognitoUser) => {
        setUser(cognitoUser);
        return cognitoUser;
      })
      .catch((err) => {
        if (err.code === 'UserNotFoundException') {
          // err.message = 'Invalid username or password';
        }

        throw err;
      });

  const logout = () =>
    Auth.signOut().then((data) => {
      setUser(null);
      return data;
    });

  const values = React.useMemo(() => ({ user, login, logout }), [user]);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error('`useUser` hook must be used within a `UserProvider` component');
  }
  return context;
};

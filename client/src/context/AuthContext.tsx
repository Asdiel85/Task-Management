import { createContext, useState } from "react";

type loggedInUser = {
  id: string;
  username: string;
  isAdmin: boolean;
  token: string;
};

type AuthProviderProps = {
  children?: React.ReactNode;
};

type IAuthContext = {
  loggedUser: loggedInUser | null;
  setLoggedUser: (user: loggedInUser | null) => void;
};

const initialValue = {
  loggedUser: null,
  setLoggedUser: () => {},
};

export const UserContext = createContext<IAuthContext>(initialValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loggedUser, setLoggedUser] = useState<loggedInUser | null>(
    initialValue.loggedUser
  );

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};

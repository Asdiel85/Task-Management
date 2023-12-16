import { createContext, useState } from "react";
import { AuthProviderProps, IAuthContext, loggedInUser } from "../utils/types";

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

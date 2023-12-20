import { createContext, useEffect, useState } from "react";
import { AuthProviderProps, IAuthContext, loggedInUser } from "../utils/types";
import { getLoggedUser } from "../utils/auth";

const initialValue = {
  loggedUser: null,
  setLoggedUser: () => {},
};

export const UserContext = createContext<IAuthContext>(initialValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loggedUser, setLoggedUser] = useState<loggedInUser | null>(
    initialValue.loggedUser
  );

  useEffect(() => {
    const user: loggedInUser = getLoggedUser();
    if(user) {
      setLoggedUser(user)
    }
  },[])

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};

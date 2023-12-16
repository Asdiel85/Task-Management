export type loggedInUser = {
  id: string;
  username: string;
  isAdmin: boolean;
  token: string;
};

export type AuthProviderProps = {
  children?: React.ReactNode;
};

export type IAuthContext = {
  loggedUser: loggedInUser | null;
  setLoggedUser: (user: loggedInUser | null) => void;
};

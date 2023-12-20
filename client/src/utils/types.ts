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

export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type ToDo = {
  name: string,
  taskId: string,
}

export type Task = {
  _id: string,
  name: string,
  status: 'Not Started' | 'Pending' | 'Finnished',
  owner: string,
  todos: ToDo[]
}
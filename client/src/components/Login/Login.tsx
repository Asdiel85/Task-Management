import Form from "react-bootstrap/Form";
import styles from './Login.module.css'
import * as authService from '../../service/authService'
import { ChangeEvent, FC, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { handleResponse } from "../../utils/handleResponse";
import { loggedInUser, LoginFormValues } from "../../utils/types";

export const Login: FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: ''
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
   setFormValues((state) =>({...state, [event.target.name]: event.target.value}))
  }

  const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();
   const response: Response = await authService.login(formValues);
   const userData: loggedInUser = await handleResponse(response);
   localStorage.setItem('token', userData.token);
   localStorage.setItem('user', JSON.stringify(userData));
   navigate('/tasks')
  }

  return (
    <div className={styles.formHolder}>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="name@example.com" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="password" onChange={handleChange} />
      </Form.Group>
      <input type="submit" value= 'Submit' />
    </Form>
    </div>
  );
};

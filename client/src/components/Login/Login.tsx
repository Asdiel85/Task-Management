import Form from "react-bootstrap/Form";
import styles from './Login.module.css'
import * as authService from '../../service/authService'
import { ChangeEvent, FC, useState } from "react";
import { handleResponse } from "../../utils/handleResponse";
import { loggedInUser } from "../../utils/types";

export const Login: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    } 
  }

  const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();
   const response: Response = await authService.login({email, password});
   const userData: loggedInUser = await handleResponse(response);
   console.log(userData);
   
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

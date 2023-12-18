import Form from "react-bootstrap/Form";
import styles from './Login.module.css'
import { FC } from "react";

export const Login: FC = () => {
  return (
    <div className={styles.formHolder}>
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" />
      </Form.Group>
      <input type="submit" value= 'Submit' />
    </Form>
    </div>
  );
};

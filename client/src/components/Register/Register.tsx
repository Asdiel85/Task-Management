import Form from "react-bootstrap/Form";
import styles from "./Register.module.css";
import * as authService from '../../service/authService'
import { FC, useState, ChangeEvent } from "react";
import { RegisterFormValues } from "../../utils/types";

export const Register: FC = () => {
  const [formValues, setFormValues] = useState<RegisterFormValues>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormValues((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault()
     await authService.register(formValues)
  };
  return (
    <div className={styles.formHolder}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="repeatPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            name="repeatPassword"
            type="password"
            placeholder="Repeat Password"
            onChange={handleChange}
          />
        </Form.Group>
        <input type="submit" value="Register" />
      </Form>
    </div>
  );
};

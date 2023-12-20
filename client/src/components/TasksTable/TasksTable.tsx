import Table from "react-bootstrap/Table";
import { FC, useContext, useEffect, useState } from "react";
import * as taskService from "../../service/taskService";
import { UserContext } from "../../context/AuthContext";
import { IAuthContext, Task } from "../../utils/types";

export const TasksTable: FC = () => {
  const { loggedUser } = useContext<IAuthContext>(UserContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    taskService
      .getAllTasks(loggedUser?.id!)
      .then((data) => {
        setTasks(data)})
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task: Task) => (
          <tr key={task._id}>
            <td>{task.name}</td>
            <td>{task.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

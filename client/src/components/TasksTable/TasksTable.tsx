import Table from "react-bootstrap/Table";
import {ChangeEvent, FC, useContext, useEffect, useState } from "react";
import * as taskService from "../../service/taskService";
import { UserContext } from "../../context/AuthContext";
import { IAuthContext, Task } from "../../utils/types";

export const TasksTable: FC = () => {
  const { loggedUser } = useContext<IAuthContext>(UserContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [status, setStatus] = useState<string>('')
  const [taskId, setTaskId] = useState<string>('')

  useEffect(() => {
    taskService
      .getAllTasks(loggedUser?.id!)
      .then((data) => {
        setTasks(data)})
  }, [loggedUser?.id]);

  const handleStatusChange  =  (event: ChangeEvent<HTMLSelectElement>, taskId:string) : void => {
    setStatus(event.currentTarget.value)
    setTaskId(taskId)
  }
  useEffect(() => {
    taskService.updateTaskStatus(taskId, status)
    .then(res => res.json())
  },[status])

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
            <td><select onChange={(event) =>handleStatusChange(event, task._id)} name="status" id="status" defaultValue={task.status}>
              <option value="Not Started">Not Started</option>
              <option value="Pending">Pending</option>
              <option value="Finnished">Finnished</option>
              </select></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import {
  ChangeEvent,
  FC,
  FormEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import * as taskService from "../../service/taskService";
import { UserContext } from "../../context/AuthContext";
import { IAuthContext, Task } from "../../utils/types";

export const TasksTable: FC = () => {
  const initialTask: Task = {
    _id: '',
    name: '',
    status: 'Not Started',
    owner: '',
    todos: [],
  };

  const { loggedUser } = useContext<IAuthContext>(UserContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [status, setStatus] = useState<string>("");
  const [taskId, setTaskId] = useState<string>(initialTask._id);
  const [taskName, setTaskName] = useState<string>('')
  const [taskInput, setTaskInput] = useState<string>('')

  useEffect(() => {
    taskService.getAllTasks(loggedUser?.id!).then((data) => {
      setTasks(data);
    });
  }, [loggedUser?.id]);

  const handleStatusChange = (
    event: ChangeEvent<HTMLSelectElement>,
    taskId: string
  ): void => {
    setStatus(event.target.value);
    setTaskId(taskId);
  };

  const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTaskInput(event.target.value) 
  }
  const handleSubmitBtnPress = async (event: SyntheticEvent, taskName: string): Promise<void> => {
    event.preventDefault()
    setTaskName(taskInput)
    const newTask = await taskService.createTask(taskName)
    setTaskName('');
  }
 

  useEffect(() => {
    if (taskId !== "") {
      taskService.updateTaskStatus(taskId, status).then((res) => res.json());
    }
  }, [taskId]);

  return (
    <>
      {" "}
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
              <td>
                <select
                  onChange={(event) => handleStatusChange(event, task._id)}
                  name="status"
                  id="status"
                  defaultValue={task.status}
                >
                  <option value="Not Started">Not Started</option>
                  <option value="Pending">Pending</option>
                  <option value="Finnished">Finnished</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form onSubmit={(event) => handleSubmitBtnPress(event, taskName)}>
      <Form.Group className="mb-3" controlId="taskInput">
        <Form.Label>Add task</Form.Label>
        <Form.Control name="taskInput" type="text" placeholder="Add Task" onChange={handleTaskNameChange} />
      </Form.Group>
      <input type="submit" value= 'Submit' />
    </Form>
    </>
  );
};

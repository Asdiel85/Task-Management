import { BASE_URL, TASKS } from "../utils/constants";
import { handleResponse } from "../utils/handleResponse";

export const getAllTasks = async (userId: string) => {
  const response = await fetch(`${BASE_URL}${TASKS}/${userId}`);
  return handleResponse(response);
};

export const getSingleTask = async (taskId: string) => {
  const response = await fetch(`${BASE_URL}${TASKS}/${taskId}`);

  return handleResponse(response);
};

import { getToken } from "../utils/auth";
import { BASE_URL, TASKS } from "../utils/constants";
import { handleResponse } from "../utils/handleResponse";

export const getAllTasks = async (userId: string) => {
  const response: Response = await fetch(`${BASE_URL}${TASKS}/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });
  return handleResponse(response);
};

export const getSingleTask = async (taskId: string) => {
  const response: Response = await fetch(`${BASE_URL}${TASKS}/${taskId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });

  return handleResponse(response);
};

export const updateTaskStatus = async (taskId: string, status: string) => {
  const response: Response = await fetch(`${BASE_URL}${TASKS}/${taskId}/status`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken()
    },
    body : JSON.stringify({status})
  })
  return response
}

import { getToken } from "../utils/auth";
import { BASE_URL, CREATE, TASKS } from "../utils/constants";
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

export const createTask = async (name: string) => {
  const response: Response = await fetch(`${BASE_URL}${TASKS}${CREATE}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    body: JSON.stringify({name})
  })
  return response;
}

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

export const editTask = async(taskId: string, data: string) => {
  const response: Response = await fetch(`${BASE_URL}${TASKS}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken()
    },
    body: JSON.stringify({data})
  })
  return response;
}
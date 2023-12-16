export async function handleResponse(response: Response) {
    if (response && response.ok) {
        return await response.json();
    } else {
      const message: string = await response.json()
        throw new Error(message);
    }
  };
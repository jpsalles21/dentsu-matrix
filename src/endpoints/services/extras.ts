import { api } from "..";

export const extras = async () => {
  return await api('/reservation/extras', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([]), 
  });
};

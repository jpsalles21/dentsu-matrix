import { api } from "..";
import { User } from "@/types";

export const commitReservation = async (user: User) => {
  return await api('/reservation/commit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

import { api } from "..";

export const getCarPerLocation = async (id: number) => {
  const data = await api (`/location/${id}/vehicles`);
  const locations = data[0];
  return locations;
};
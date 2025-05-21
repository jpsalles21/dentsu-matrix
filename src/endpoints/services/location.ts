import { api } from "..";

export const getAllLocations = async () => {
  const data = await api ('/location/listAll');
  const locations = data[0];
  return locations;
};
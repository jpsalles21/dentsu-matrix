import { api } from "@/endpoints";

export const getAllLocations = async () => {
  const response = await api ('/location/listAll');
  return response.data[0]; 
};
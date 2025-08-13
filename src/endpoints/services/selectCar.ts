import { api } from "..";

interface VehicleDTO {
  id: number;
  model: string;
  price: number;
}

export const selectCar = async (payload: VehicleDTO) => {
  const data = await api('/reservation/selectCar', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return data;
};

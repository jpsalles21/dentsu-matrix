import { api } from "..";

export const getAllVehicles = async () => {
    const data = await api ('/vehicles/ListAll');
    const vehicles = data[0];
    return vehicles;
}
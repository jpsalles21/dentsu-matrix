import { api } from ".."

export const getVehicleById = async (id: number) => {
    const data = await api(`/vehicles/${id}`);
    return data[0];
}
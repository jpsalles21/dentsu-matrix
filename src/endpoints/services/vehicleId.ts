import { api } from "..";

export const getVehicleById = async (id: number) => {
    try {
        const data = await api(`/vehicles/${id}`);
        if (!Array.isArray(data) || data.length === 0) {
            return null;
        }
        return data[0];
    } catch (error) {
        console.error(error);
        return null;
    }
};

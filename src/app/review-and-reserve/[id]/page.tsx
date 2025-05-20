import { getVehicleById } from "@/endpoints/services/vehicleId";
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
    }
}

const ReviewAndReservePage = async ({ params }: Props) => {
    const { id } = params;
    const vehicle = await getVehicleById(Number(id));
    console.log(vehicle);

    if(!vehicle) return notFound();

    return (
        <>
            <h1>{vehicle.model}</h1>
        </>
    );
}

export default ReviewAndReservePage;
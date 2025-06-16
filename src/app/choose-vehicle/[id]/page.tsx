import { VehicleCard } from "@/components";
import { getCarPerLocation } from "@/endpoints/services/carsPerLocation";
import { Vehicle } from "@/types";

type Props = {
    params: {
        id: string;
    }
}

const ChooseVehiclePage = async ({ params }: Props) => {
    const { id } = params;
    const vehicles: Vehicle[] = await getCarPerLocation(Number(id));
    return (
        <>
            {vehicles.map((vehicle: Vehicle) => (
                <VehicleCard
                    key={vehicle.id}
                    model={vehicle.model}
                    price={vehicle.price}
                    id={vehicle.id} />
            ))}
        </>
    );
}

export default ChooseVehiclePage;
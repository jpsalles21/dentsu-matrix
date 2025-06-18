import { BookingSteps, VehicleCard } from "@/components";
import { getCarPerLocation } from "@/endpoints/services/carsPerLocation";
import { Vehicle } from "@/types";
import VehicleList from "@/views/VehicleList/VehicleList";

type Props = {
    params: {
        id: string;
    }
}

const ChooseVehiclePage = async ({ params }: Props) => {
    const { id } = params;
    return (
        <>
        <BookingSteps currentStep="review"/>
        <VehicleList id={Number(id)}/>
        </>
    );
}

export default ChooseVehiclePage;
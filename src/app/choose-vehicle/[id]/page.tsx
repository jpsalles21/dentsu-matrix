import { BookingHeader, BookingSteps, SimpleHeader } from "@/components";
import styles from './page.module.css';
import VehicleList from "@/views/VehicleList/VehicleList";
import { Vehicle } from "@/types";
import { getCarPerLocation } from "@/endpoints/services/carsPerLocation";

type Props = {
    params: {
        id: string;
    }
}

const ChooseVehiclePage = async ({ params }: Props) => {
    const { id } = params;
    const vehicles: Vehicle[] = await getCarPerLocation(Number(id));
    const vehiclesCount = vehicles.length;

    return (
        <div className={styles.container}>
            <div className={styles.page_header}>
                <SimpleHeader />
                <BookingSteps currentStep="vehicle" />
                <BookingHeader
                    title="Choose a Vehicle Class"
                    results={`${vehiclesCount} results`}
                />
            </div>
            <section className={styles.vehicle_list}>
                <VehicleList vehicles={vehicles} />
            </section>
        </div >
    );
}


export default ChooseVehiclePage;
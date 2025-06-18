import { VehicleCard } from "@/components"
import { Vehicle } from "@/types/vehicle";
import { getCarPerLocation } from "@/endpoints/services/carsPerLocation";
import styles from './VehicleList.module.css'

interface VehicleListProps {
  id: number;
}

const VehicleList = async ({ id }: VehicleListProps) => {
  const vehicles: Vehicle[] = await getCarPerLocation(id);

  return (
    <div className={styles.container}>
      {vehicles.map((vehicle: Vehicle) => (
        <VehicleCard
          key={vehicle.id}
          model={vehicle.model}
          price={vehicle.price}
          id={vehicle.id} />
      ))}
    </div>
  )
}

export default VehicleList;

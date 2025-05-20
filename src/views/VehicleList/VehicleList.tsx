import { VehicleCard } from "@/components"
import { Vehicle } from "@/types/vehicle";
import { getAllVehicles } from "@/endpoints/services/vehicle";

const VehicleList = async () => {
  const vehicles = await getAllVehicles();
  console.log(vehicles)

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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

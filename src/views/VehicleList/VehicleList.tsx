import { VehicleCard } from "@/components"
import { VehicleCardProps } from "@/components/VehicleCard/VehicleCard"

const getVehicles = async () => {
  const res = await fetch('http://localhost:8090/vehicles/ListAll');
  const data = await res.json();
  console.log(data[0]);
  return data[0];
}

const VehicleList = async () => {
  const vehicles = await getVehicles();

  return (
    <div>
      <h1>Lista de Veículos</h1>
      {vehicles.map((vehicle: VehicleCardProps) => (
        <VehicleCard key={vehicle.id} model={vehicle.model} price={vehicle.price}/>
      ))}
    </div>
  )
}

export default VehicleList;

import styles from './VehicleCard.module.css'

export interface VehicleCardProps {
    id?: number
    model: string;
    price: number;
}


const VehicleCard = ({ model, price }: VehicleCardProps) => {
    return (
        <div className={styles.vehicle_card__container}>
            <p>{model}</p>
            <p>{price}</p>
        </div>
    )
}

export default VehicleCard;
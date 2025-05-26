'use client'
import Image from 'next/image';
import styles from './VehicleCard.module.css'
import Link from 'next/link';
import { Button } from '@components'
import { Vehicle } from '@/types/vehicle';
import { useRouter } from 'next/navigation';

type VehicleCardProps = Vehicle;

const VehicleCard = ({ model, price, id }: VehicleCardProps) => {
    const router = useRouter();

    const handleReviewReserve = (id: number) => {
        router.push(`/review-and-reserve`)
    }

    return (
        <div className={styles.vehicle_card__container}>
            <div className={styles.vehicle_card__vehicle__content}>
                <Image
                    src={'/vehicles/ford_ka.png'}
                    alt={'Vehicle Image'}
                    width={260}
                    height={215}
                />
                <div className={styles.vehicle_card__vehicle__content__info}>
                    <h2 className={styles.vehicle_title}>{model} or similar</h2>
                    <div className={styles.vehicle_infos}>
                        <span className={styles.vehicle_info}><p> Automatic </p> </span>
                        <span className={styles.vehicle_info}><p> 5 people </p></span>
                        <span className={styles.vehicle_info}><p> 4 bags </p> </span>
                    </div>
                    <Link href={''}>
                        Features & price details
                    </Link>

                </div>
            </div>
            <div className={styles.vehicle_card_vehicle__payment}>
                <span>PAY LATER</span>
                <div>
                    <p>${price}.00</p>
                </div>
                <div>
                    <Button
                        variant='black'
                        onClick={() => handleReviewReserve(id)}
                    >Select</Button>
                </div>
            </div>
        </div >
    )
}

export default VehicleCard;
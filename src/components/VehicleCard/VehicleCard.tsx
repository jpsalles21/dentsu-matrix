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
                    src={'/vehicles/car.png'}
                    alt={'Vehicle Image'}
                    width={260}
                    height={215}
                />
                <div className={styles.vehicle_card__vehicle__content__info}>
                    <h2 className={styles.vehicle_title}>{model} or similar</h2>
                    <div className={styles.vehicle_infos}>
                        <span className={styles.vehicle_info}>
                            <Image
                                src={'/vehicles/Send.svg'}
                                alt='Send Icon'
                                width={20}
                                height={20}
                            />
                            Automatic
                        </span>
                        <span className={styles.vehicle_info}>
                            <Image
                                src={'/vehicles/People.svg'}
                                alt='People Icon'
                                width={20}
                                height={20}
                            />
                            5 people
                        </span>
                        <span className={styles.vehicle_info}>
                            <Image
                                src={'/vehicles/Bags.svg'}
                                alt='Bags Icon'
                                width={20}
                                height={20}
                            />
                            4 bags
                        </span>
                    </div>
                    <Link className={styles.vehicle_link} href={''}>
                        Features & price details
                    </Link>

                </div>
            </div>
            <div className={styles.vehicle_card_vehicle__payment}>
                <h3 className={styles.payment_title}>PAY LATER</h3>
                <div className={styles.payment_price_content}>
                    <p className={styles.payment_price}>${price}.00</p>
                    <span>Per Day</span>
                </div>
                <div>
                    <div className={styles.payment_actions}>
                        <Button
                            variant='black'
                            onClick={() => handleReviewReserve(id)}
                        >Select
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VehicleCard;
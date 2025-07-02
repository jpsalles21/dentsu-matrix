
import { BookingHeader, BookingSteps, SimpleHeader } from "@/components";
import { getVehicleById } from "@/endpoints/services/vehicleId";
import ReviewAndReserve from "@/views/ReviewAndReserve/ReviewAndReserve";
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
    }
}

const ReviewAndReservePage = async ({ params }: Props) => {
    const { id } =  params;
    const vehicle = await getVehicleById(Number(id));

    if (!vehicle) return notFound();

    return (
        <>
            <SimpleHeader />
            <BookingSteps currentStep="review" />
            <BookingHeader title="Review & Reserve"/>
            <ReviewAndReserve vehicle={vehicle} />

        </>
    );
}

export default ReviewAndReservePage;
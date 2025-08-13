import { api } from "..";

interface LocationRef {
  id: number;
}

interface InitiateBookingPayload {
  pickupDate: string;      
  returnDate: string;
  pickupTime: string;     
  returnTime: string;
  pickupLocation: LocationRef;
  returnLocation: LocationRef;
}

export const initiateBooking = async (payload: InitiateBookingPayload) => {
  const data = await api('/reservation/iniciate', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return data;
};

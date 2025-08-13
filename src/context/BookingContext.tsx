'use client'

import { createContext, useContext, ReactNode } from "react";
import { Location, Vehicle, User, DateTime } from "@/types";
import useLocalStorage from "@/hooks/useLocalStorage";

interface BookingContextProps {
  location: Location | null;
  setLocation: (loc: Location) => void;
  vehicle: Vehicle | null;
  setVehicle: (v: Vehicle) => void;
  user: User | null;
  setUser: (usr: User) => void;
  pickupInfo: DateTime;
  setPickupInfo: (dt: DateTime) => void;
  returnInfo: DateTime;
  setReturnInfo: (dt: DateTime) => void;
  totalPrice: number | null;
  setTotalPrice: (tp: number) => void;
}

const BookingContext = createContext<BookingContextProps | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useLocalStorage<Location | null>('booking_location', null);
  const [vehicle, setVehicle] = useLocalStorage<Vehicle | null>('booking_vehicle', null);
  const [user, setUser] = useLocalStorage<User | null>('booking_user', null);
  const [pickupInfo, setPickupInfo] = useLocalStorage<DateTime>('booking_pickupInfo', { date: '', time: '' });
  const [returnInfo, setReturnInfo] = useLocalStorage<DateTime>('booking_returnInfo', { date: '', time: '' });
  const [totalPrice, setTotalPrice] = useLocalStorage<number | null>('booking_totalPrice', null);

  return (
    <BookingContext.Provider value={{
      location,
      setLocation,
      vehicle,
      setVehicle,
      user,
      setUser,
      pickupInfo,
      setPickupInfo,
      returnInfo,
      setReturnInfo,
      totalPrice,
      setTotalPrice
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBookingContext must be used within BookingProvider");
  return context;
};

'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import { Location, Vehicle, User, DateTime } from "@/types";

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
}

const BookingContext = createContext<BookingContextProps | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const [pickupInfo, setPickupInfo] = useState<DateTime>({ date: '', time: '' });
  const [returnInfo, setReturnInfo] = useState<DateTime>({ date: '', time: '' });

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
      setReturnInfo
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

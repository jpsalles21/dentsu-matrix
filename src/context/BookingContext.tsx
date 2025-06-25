'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
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

const getFromStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location | null>(() => getFromStorage('booking_location', null));
  const [vehicle, setVehicle] = useState<Vehicle | null>(() => getFromStorage('booking_vehicle', null));
  const [user, setUser] = useState<User | null>(() => getFromStorage('booking_user', null));
  const [pickupInfo, setPickupInfo] = useState<DateTime>(() => getFromStorage('booking_pickupInfo', { date: '', time: '' }));
  const [returnInfo, setReturnInfo] = useState<DateTime>(() => getFromStorage('booking_returnInfo', { date: '', time: '' }));

  useEffect(() => {
    if (location) localStorage.setItem('booking_location', JSON.stringify(location));
  }, [location]);

  useEffect(() => {
    if (vehicle) localStorage.setItem('booking_vehicle', JSON.stringify(vehicle));
  }, [vehicle]);

  useEffect(() => {
    if (user) localStorage.setItem('booking_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('booking_pickupInfo', JSON.stringify(pickupInfo));
  }, [pickupInfo]);

  useEffect(() => {
    localStorage.setItem('booking_returnInfo', JSON.stringify(returnInfo));
  }, [returnInfo]);

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

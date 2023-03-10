import { ITraveler } from '@/models/Traveler';
import { IFlightStatus } from '@/models/Flight';

export interface ITransfer {
  id: number;
  datetime: string;
  category: string;
  traveler_photo: string;
  traveler_first_name: string;
  traveler_last_name: string;
  location_title: string;
  early_checkin: boolean;
  late_checkout: boolean;
  return_transfer: boolean;
  babies: boolean;
  property_title: string;
}

export interface ITransferDetails {
  id: number;
  from_location_title: string;
  from_location_address: string;
  from_datetime: string;
  to_location_title: string;
  to_location_address: string;
  to_datetime: string;
  passengers: number;
  babyseats: number;
  luggage: number;
  hand_luggage: number;
  flight_status: IFlightStatus | null;
  traveler: ITraveler;
}

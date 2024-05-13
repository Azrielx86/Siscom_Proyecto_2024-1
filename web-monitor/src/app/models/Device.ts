import {Timestamp} from "firebase/firestore"

export interface Device {
  id: string;
  device_name: string;
  location: string;
}

export interface Measure {
  date: Timestamp;
  formatedDate: Date;
  temperature: number;
  humidity: number;
}

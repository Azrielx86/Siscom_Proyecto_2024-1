export interface Device {
  id: string;
  device_name: string;
  location: string;
}

export interface Measures {
  date: string;
  temperature: number;
  humidity: number;
}

export interface FichaClinica {
  id: string;
  ownerName: string;
  date: string;
  address: string;
  city: string;
  phone1: string;
  phone2: string;
  emergencyContactName?: string;
  emergencyPhone?: string;
  email?: string;
  petName: string;
  specie: string;
  race: string;
  color: string;
  age: number;
  genere: string;
  diet?: string;
  currentMedication?: string;
  reasonForVisit: string;
}

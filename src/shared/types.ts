export interface BookType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export type SelectedPage = "home" | "books" | "medicalEquipments" | "contactUs";

export interface MedicalEquipmentsType {
  name: string;
  description?: string;
  image: string;
}

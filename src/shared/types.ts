// export interface BookType {
//   // icon: JSX.Element;
//   title: string;
//   // description: string;
//   id: number;
//   author: any;
//   price: any;
//   date2Buy: any;
//   image: any;
// }
// export type SelectedPage = "home" | "books" | "medicalEquipments" | "contactUs";

// export interface MedicalEquipmentsType {
//   name: string;
//   description?: string;
//   image: string;
// }

// export interface BookType {
//   id: number;
//   title: string;
//   author: string;
//   price: number;
//   date2Buy: string;
//   image: string;
//   certification?: string;
// }

// export type SelectedPage = "home" | "books" | "medicalEquipments" | "contactUs";

// export interface MedicalEquipmentsType {
//   name: string;
//   description?: string;
//   image: string;
// }
export interface BookType {
  id?: number;
  title?: string;
  author?: string;
  price: number;
  date2Buy: string;
  image: string;
  certification?: string;
}

export type SelectedPage = "home" | "books" | "medicalEquipments" | "contactUs";

export interface MedicalEquipmentsType {
  name: string;
  description?: string;
  image: string;
}

type CommonProps = {
  id: number;
  image: string;
};

type BookProps =
  | { certification: string; title?: never; author?: never }
  | { certification?: never; title: string; author: string };

export type BookTypeModified = CommonProps & BookProps;

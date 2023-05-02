import { MedicalEquipmentsType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image2.jpg";
import image5 from "@/assets/image1.jpg";
import image6 from "@/assets/image3.jpg";
import HText from "@/shared/HText";
import Medical from "./Medicals";

const medicalEquipments: Array<MedicalEquipmentsType> = [
  {
    name: "Anatomy Text",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Physiology",
    image: image2,
  },
  {
    name: "Biochemistry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Pathology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Pharmacology",
    image: image5,
  },
  {
    name: "Medicine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

const MedicalEquipments = () => {
  return (
    <section id="medicalequipments" className="w-full bg-primary-100 py-40">
      <div className="container mx-auto">
        <HText>Medical Equipments</HText>
        <ul className="mt-20 flex flex-wrap justify-center gap-8">
          {medicalEquipments.map((medicalEquipment, index) => (
            <Medical key={index} {...medicalEquipment} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MedicalEquipments;

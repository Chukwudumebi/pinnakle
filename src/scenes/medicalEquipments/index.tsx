// import { MedicalEquipmentsType } from "@/shared/types";
// import image1 from "@/assets/image1.jpg";
// import image2 from "@/assets/image2.jpg";
// import image3 from "@/assets/image3.jpg";
// import image4 from "@/assets/image2.jpg";
// import image5 from "@/assets/image1.jpg";
// import image6 from "@/assets/image3.jpg";
// import HText from "@/shared/HText";
// import Medical from "./Medicals";

// const medicalEquipments: Array<MedicalEquipmentsType> = [
//   {
//     name: "Anatomy Text",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image1,
//   },
//   {
//     name: "Physiology",
//     image: image2,
//   },
//   {
//     name: "Biochemistry",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image3,
//   },
//   {
//     name: "Pathology",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image4,
//   },
//   {
//     name: "Pharmacology",
//     image: image5,
//   },
//   {
//     name: "Medicine",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image6,
//   },
// ];

// const MedicalEquipments = () => {
//   return (
//     <section id="medicalequipments" className="w-full bg-primary-100 py-40">
//       <div className="container mx-auto">
//         <HText>Medical Equipments</HText>
//         <ul className="mt-20 flex flex-wrap justify-center gap-8">
//           {medicalEquipments.map((medicalEquipment, index) => (
//             <Medical key={index} {...medicalEquipment} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };
// export default MedicalEquipments;

import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BookType } from "@/shared/types";
import {
  HomeIcon as HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/solid";

import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Medicals from "./Medicals";
import { image1 } from "@/assets";
const Card = ({ item }: any) => {
  return (
    <div className=" rounded-lg overflow-hidden p-3 bg-gray-100 border shadow-sm mb-5">
      <button className=" bg-green-600">
        Get it by Friday{item.date2Buy}
      </button>
      <div className="h-80">
        <img className="h-full w-full" src={item.image} alt="image" />
      </div>
      <p>{ item.price}</p>
    </div>
  );
}

const books: Array<BookType | any> = [
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
  {
    image: image1,
    date2Buy: "Friday",
    certification: "CALLBYm",
    price: 355990,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Book = () => {
  return (
    <section id="books" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Get the Latest and high quality Medical Text</HText>
          <p className="my-5 text-sm">
            We provide world class Medical text books
          </p>
          {/* <ActionButton /> */}
        </motion.div>
        {/* CONTENT */}
        <motion.div
          className="flex flex-wrap justify-between"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {books.map((book, index) => (
            // <Books key={index} {...book} />
            <Card item={book} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Book;

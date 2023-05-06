// import ActionButton from "@/shared/ActionButton";
// import HText from "@/shared/HText";
// import { BookType } from "@/shared/types";
// import {
//   HomeIcon as HomeModernIcon,
//   UserGroupIcon,
//   AcademicCapIcon,
// } from "@heroicons/react/solid";
// import { motion } from "framer-motion";
// import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
// import Books from "./Books";
// import { image1 } from "@/assets";


// const Card = ({ item }: any) => {
//   return (
//     <div className="mb-5 flex flex-col overflow-hidden rounded-lg border bg-primary-500 shadow-sm">
//       <div className="h-80 w-80">
//         <img className="h-full w-full" src={item.image} alt="image" />
//       </div>
//       <div className="ml-4 flex flex-row justify-between">
//         <div>
//           <p className="text-lg font-bold">{item.certification}</p>
//           <p className="text-sm text-gray-500">Price: {item.price}</p>
//         </div>
//         <button className="rounded bg-green-600 px-4 py-2">
//           Get it by {item.date2Buy}
//         </button>
//       </div>
//     </div>
//   );
// };

// const books: Array<BookType | any> = [
//   // ...
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
//   {
//     image: image1,
//     date2Buy: "Friday",
//     certification: "CALLBYm",
//     price: 355990,
//   },
// ];

// const container = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const Book = () => {
//   return (
//     <section id="books" className="mx-auto min-h-full w-5/6 py-20">
//       <motion.div>
//         {/* HEADER */}
//         <motion.div
//           className="md:my-5 md:w-3/5"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <HText>Get the Latest and high quality Medical Text</HText>
//           <p className="my-5 text-sm">
//             We provide world class Medical text books
//           </p>
//           {/* <ActionButton /> */}
//         </motion.div>
//         {/* CONTENT */}
//         <motion.div
//           className="flex flex-wrap justify-between"
//           variants={container}
//           initial="hidden"
//           animate="visible"
//         >
//           {books.map((book, index) => (
//             // <Books key={index} {...book} />
//             <Card item={book} />
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Book;

import React from "react";
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
import Books from "./Books";
import { image1 } from "@/assets";

const Card = ({ item }: any) => {
  return (
    <div className="mb-5 flex flex-col overflow-hidden rounded-lg border bg-primary-500 shadow-sm">
      <div className="h-80 w-80">
        <img className="h-full w-full" src={item.image} alt="image" />
      </div>
      <div className="ml-4 flex flex-row justify-between">
        <div>
          <p className="text-lg font-bold">{item.certification}</p>
          <p className="text-sm text-gray-500">Price: {item.price}</p>
        </div>
        <button className="rounded bg-green-600 px-4 py-2">
          Get it by {item.date2Buy}
        </button>
      </div>
    </div>
  );
};

const MemoizedCard = React.memo(Card);

const books: Array<BookType> = [
  // ...
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
            <MemoizedCard key={index} item={book} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Book;

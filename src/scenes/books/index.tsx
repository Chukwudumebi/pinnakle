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
    <div className="mb-5 flex h-fit w-80 flex-col overflow-hidden rounded-lg border px-3 py-3 shadow-sm transition-all duration-500  hover:scale-105">
      <div className="relative">
        <div className="absolute flex h-full w-full items-center justify-center text-transparent text-white transition-all duration-500 hover:bg-[#00adee4f] hover:text-white">
          <p>Something random</p>
        </div>
        <img className="h-full w-full " src={item.image} alt="image" />
      </div>
      {/* <p className=" font-bold">{item.certification}</p> */}
      <div className="flex flex-row justify-between pt-3">
        <button className="rounded px-2 text-xs shadow-sm shadow-primary-500 transition-all duration-500 hover:scale-105 hover:bg-primary-500 hover:text-white">
          <p className="">Price: {item.price}</p>
        </button>
        <button className="h-fit rounded bg-green-600 px-2 py-2 text-xs text-white transition-all  hover:scale-105 hover:bg-white hover:text-green-600 hover:shadow-sm hover:shadow-green-600">
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

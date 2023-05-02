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

const books: Array<BookType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "S100's of Diverse classes",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
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
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate f
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
            <Books key={index} {...book} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Book;
// type Props = {
//   name: string;
//   description?: string;
//   image: string;
// };

// const Medicals = ({ name, description = "some description", image }: Props) => {
//   const overlayStyles = `p-5 absolute z-30 flex
//   h-[380px] w-[450px] flex-col items-center justify-center
//   whitespace-normal bg-primary-500 text-center text-white
//   opacity-0 transition duration-500 hover:opacity-90`;

//   return (
//     <li className="relative mx-5 inline-block h-[380px] w-[450px]">
//       <div className={overlayStyles}>
//         <p className="text-2xl">{name}</p>
//         <p className="mt-5">{description}</p>
//       </div>
//       <img alt={`\${image}`} src={image} />
//     </li>
//   );
// };

// export default Medicals;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Medicals = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <Link
        className="hover:text-secondary-500 text-sm font-bold text-primary-500 underline"
        to="/contact-us"
      >
        <p>Learn More</p>
      </Link>
    </motion.div>
  );
};

export default Medicals;

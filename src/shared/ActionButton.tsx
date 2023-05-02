import React from "react";
import { Link } from "react-router-dom";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  to: string;
}

const ActionButton: React.FC<Props> = ({ children, to, ...rest }) => {
  return (
    <Link
      to={to}
      className="rounded-md bg-secondary-400 px-6 py-3 text-white"
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ActionButton;

// import React from "react";
// import { Link } from "react-router-dom";

// interface Props {
//   children: React.ReactNode;
//   to: string;
// }

// const ActionButton: React.FC<Props> = ({ children, to }) => {
//   return (
//     <Link to={to} className="rounded-md bg-secondary-400 px-6 py-3 text-white">
//       {children}
//     </Link>
//   );
// };

// export default ActionButton;

import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to: string;
};

const ActionButton = ({ children, to }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      className="hover:bg-secondary-500 rounded-full bg-primary-500 px-10 hover:text-white"
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
};

export default ActionButton;

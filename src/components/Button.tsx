import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`btn bg-white text-black text-2xl font-zenKaku font-bold border-2 border-purpleAccent hover:bg-purpleAccent hover:text-white w-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <li className={`text-4xl text-black flex-grow btn btn-info ${className}`}>
      {children}
    </li>
  );
};

export default Button;

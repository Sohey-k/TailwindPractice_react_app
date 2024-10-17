import { ReactNode } from "react";

const Button = ({ children , className }: { children: ReactNode , className? : string }) => {
  return (
    <li className={`text-4xl text-black flex-grow btn btn-info ${className}`}>
      {children}
    </li>
  );
};

export default Button;

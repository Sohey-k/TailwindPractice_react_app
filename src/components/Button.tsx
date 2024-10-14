import { ReactNode } from "react";

const Button = ({ children }: {children: ReactNode}) => {
    return(
        <li className="text-4xl text-black flex-grow btn btn-primary btn-outline border-2">{children}</li>
    )
} 

export default Button;
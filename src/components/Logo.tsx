import logo from "../assets/Rearme3.png";
import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/">
      <img src={logo} alt="Rearme logo" className={className} />
    </Link>
  );
};

export default Logo;

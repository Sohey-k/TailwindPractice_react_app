import logo from "../assets/Rearme3.png";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return <img src={logo} alt="Rearme logo" className={className} />;
};

export default Logo;

import LogoImage from "../assets/Rearme_text_logo.png";

type LogoImageProps = {
  className?: string;
};

const LogoText = ({ className }: LogoImageProps) => {
  return <img src={LogoImage} alt="Logo text" className={className} />;
};

export default LogoText;

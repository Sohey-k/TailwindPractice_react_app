import LogoImage from '../assets/Rearme_text_logo.png';

const LogoText = ({ className }: { className?: string }) => {
  return (
    <img 
      src={LogoImage} 
      alt="Logo text" 
      className={className} 
    />
  );
};

export default LogoText;

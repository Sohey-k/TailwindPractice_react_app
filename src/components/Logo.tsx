import logo from '../assets/Rearme3.png';

const Logo = ({ className }: { className?: string }) => {
  return (
    <img 
      src={logo} 
      alt="Rearme logo" 
      className={className} 
    />
  );
};

export default Logo;

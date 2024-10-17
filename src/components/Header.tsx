import Logo from "./Logo";
import LogoText from "./TextLogo";

const Header = () => {
  return (
    <div className="flex items-center">
      <Logo className="w-16 h-16 m-4" />
      <LogoText className="w-100 h-16" />
    </div>
  );
};

export default Header;

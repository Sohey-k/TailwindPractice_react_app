import Logo from "./Logo";
import LogoText from "./TextLogo";

const Header = () => {
  return (
    <div className="pb-2 flex items-center">
      <Logo />
      <LogoText />
    </div>
  );
};

export default Header;

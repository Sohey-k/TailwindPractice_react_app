import Logo from "./Logo";

const Header = () => {
  return (
    <div className="pb-2 flex items-center">
      <Logo />
      <h1 className="text-8xl font-serif font-black">RE:ARME</h1>
    </div>
  );
};

export default Header;

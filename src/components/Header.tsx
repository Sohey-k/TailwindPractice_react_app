// src/components/Header.tsx

import Logo from "./Logo";
import Textlogo_2 from "./TextLogo_2";

const Header = () => {
  return (
    <div className="flex items-center ">
      <Logo className="w-24 h-24" />
      <Textlogo_2 className="text-6xl mt-4 ml-4" />
    </div>
  );
};

export default Header;

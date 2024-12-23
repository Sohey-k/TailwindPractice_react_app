// src/components/Header.tsx

import Logo from "./Logo";
import Textlogo_2 from "./TextLogo_2";

const Header = () => {
  return (
    <div className="flex items-center ">
      <Logo className="w-16 h-16 mt-6 ml-4 " />
      <Textlogo_2 className="text-4xl mt-6 ml-4" />
    </div>
  );
};

export default Header;

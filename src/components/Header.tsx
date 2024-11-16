// src/components/Header.tsx

import Logo from "./Logo";
import Menu from "./Menu";
import Textlogo_2 from "./TextLogo_2";

const Header = () => {
  return (
    <div className="flex flex-justify-between items-center">
      <Logo className="w-[64px] h-[64px] min-w-[72px] m-4 flex-shrink-0" />
      <Textlogo_2 className="m-4 text-5xl flex-grow" />
      <Menu className="flex-grow"/>
    </div>
  );
};

export default Header;

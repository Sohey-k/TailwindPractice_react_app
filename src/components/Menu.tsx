import { Link, useLocation } from "react-router-dom";
import Textlogo_2 from "./TextLogo_2";
import Logo from "./Logo";

type Menuprops = {
  className?: string;
};

const Menu = ({ className }: Menuprops) => {
  const location = useLocation();
  const navItems = [
    { title: "BASE", path: "/" },
    { title: "IDENTITY", path: "/identity" },
    { title: "ARSENAL", path: "/arsenal" },
    { title: "LOGS", path: "/logs" },
    { title: "DEPLOYMENT", path: "/deployment" },
    { title: "SIGNAL", path: "/signal" },
  ];

  return (
    <nav className={`${className} bg-yellow-300 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar flex justify-between items-center">
          {/* Left side: Logo and Textlogo_2 */}
          <div className="flex items-center">
          <Logo className="w-[72px] h-[72px] m-4 min-w-[72px] flex-shrink-0" />  {/* Logo */}
            <Textlogo_2 className="ml-4 text-3xl sm:text-4xl md:text-5xl" />  {/* Textlogo_2 */}
          </div>

          {/* Right side: Menu for desktop */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-bold py-4 text-lg tracking-wider transition-all duration-300 relative group ${
                  location.pathname === item.path
                    ? "text-purple-800"
                    : "text-purple-600 hover:text-purple-800"
                }`}
              >
                {item.title}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu: Toggle button */}
          <div className="lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Drawer Menu (Mobile version) */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-yellow-300 text-base-content">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "text-purple-800"
                      : "text-purple-600 hover:text-purple-800"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

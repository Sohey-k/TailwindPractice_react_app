// src/components/Menu.tsx

import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import Textlogo_2 from "./TextLogo_2";

type MenuProps = {
  className?: string;
};

const Menu = ({ className }: MenuProps) => {
  // Simulating location/active state with useState
  const location = useLocation();

  const navItems = [
    { title: "HOME", path: "/" },
    { title: "PROFILE", path: "/identity" },
    { title: "SKILLS", path: "/arsenal" },
    { title: "BLOGS", path: "/logs" },
    { title: "WORKS", path: "/deployment" },
    { title: "CONTACT", path: "/signal" },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page content */}
      <div className="drawer-content">
        <nav className={`${className} bg-yellow-300 shadow-sm`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="navbar flex justify-between items-center">
              {/* Left side: Logo placeholder */}
              <div className="flex items-center">
                <Logo className="w-[72px] h-[72px] m-2 min-w-[72px] flex-shrink-0" />
                <Textlogo_2 className="text-2xl sm:text-3xl md:text-4xl z-1" />
              </div>

              {/* Right side: Menu for desktop */}
              <div className="hidden lg:flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-stalinist bg-yellow-300 py-4 ml-8 text-sm tracking-wider transition-all duration-300 relative group ${
                      location.pathname === item.path
                        ? "text-purple-800"
                        : "text-purple-600 hover:text-purple-800"
                    }`}
                  >
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu: Toggle button */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button lg:hidden"
              >
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
        </nav>
      </div>

      {/* Drawer sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-yellow-300 bg-opacity-90">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-lg font-stalinist py-4 ${
                  location.pathname === item.path
                    ? "text-purple-800"
                    : "text-purple-600 hover:text-purple-800"
                }`}
                onClick={() => {
                  const checkbox = document.getElementById(
                    "my-drawer"
                  ) as HTMLInputElement;
                  if (checkbox) checkbox.checked = false;
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;

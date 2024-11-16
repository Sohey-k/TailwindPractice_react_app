// src/components/Menu.tsx
import { Link, useLocation } from "react-router-dom";

type Menuprops = {
  className?: string;  // classNameは任意に設定（渡すことができる）
};

const Menu = ({ className}: Menuprops) => {
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
        <div className="flex justify-end space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                font-stalinist
                font-bold
                py-4
                text-lg
                tracking-wider
                transition-all
                duration-300
                relative
                group
                ${
                  location.pathname === item.path
                    ? "text-purple-800"
                    : "text-purple-600 hover:text-purple-800"
                }
              `}
            >
              {item.title}
              <span
                className="
                absolute 
                bottom-0 
                left-0 
                w-0 
                h-0.5 
                bg-purple-600 
                group-hover:w-full 
                transition-all 
                duration-300
              "
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;

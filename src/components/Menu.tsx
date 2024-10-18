import Button from "./Button";

const Menu = () => {
  return (
    <nav>
      <ul className="flex space-x-4 w-100 mt-4 mb-4">
        <li className="w-1/4"><Button>About me</Button></li>
        <li className="w-1/4"><Button>Works</Button></li>
        <li className="w-1/4"><Button>Skill</Button></li>
        <li className="w-1/4"><Button>Contact</Button></li>
      </ul>
    </nav>
  );
};

export default Menu;

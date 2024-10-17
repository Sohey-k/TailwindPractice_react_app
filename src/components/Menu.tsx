// import React from 'react'
import Button from "./Button";

const Menu = () => {
  return (
    <div>
      <ul className="flex flex-grow">
        <Button className="btn-outline">About me</Button>
        <Button>Works</Button>
        <Button>Skill</Button>
        <Button>Contact</Button>
      </ul>
    </div>
  )
}
export default Menu;
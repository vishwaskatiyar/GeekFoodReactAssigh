// import React from "react";
import NavItem from "./NavItems";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-blue-600 dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto flex justify-around items-center py-6">
        <div className="text-3xl font-bold text-white uppercase">Geek Food</div>
        <ul className="flex space-x-6 text-white text-lg">
          <NavItem href="#">Home</NavItem>
          <NavItem href="#menu">Menu</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

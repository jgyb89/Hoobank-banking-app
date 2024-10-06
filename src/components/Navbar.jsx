import { useState } from "react"; 
// Importing 'useState' to manage local state in the component.

import { close, logo, menu } from "../assets"; 
// Importing assets for the logo, menu icon, and close icon.

import { navLinks } from "../constants"; 
// Importing navigation links data from a constants file.

const Navbar = () => {
  const [active, setActive] = useState("Home"); 
  // State to track which navigation link is currently active.

  const [toggle, setToggle] = useState(false); 
  // State to manage the visibility of the mobile menu (open/close).

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Main navigation container with padding and flexbox for layout */}
      
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      {/* Logo image for the navbar */}

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* Navigation links for desktop view (hidden on small screens) */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
              // If the link is active, make it white, otherwise dim the color.
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            // Adds margin to all items except the last one.
            onClick={() => setActive(nav.title)}
            // Sets the clicked link as active.
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            {/* Anchor link for each navigation item */}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* Mobile view: Menu icon to open/close the mobile sidebar */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
          // Toggles the mobile menu (opens if closed, closes if open).
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
            // If the toggle state is false, hide the menu. If true, show it.
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          // Styling for the mobile menu container, with position, padding, and background gradient.
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {/* Mobile menu: List of navigation links in a vertical layout */}
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                  // Active link is white, others are dimmed.
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                // Adds bottom margin to all links except the last one.
                onClick={() => setActive(nav.title)}
                // Sets the clicked link as active.
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                {/* Anchor link for each mobile menu item */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
// Exporting the Navbar component for use in other parts of the application.

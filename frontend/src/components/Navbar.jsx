import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:px-16 px-4 bg- bg-white flex flex-wrap items-center py-4 md:py-0 shadow-md fixed z-10 w-full">
      <div className="flex-1 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold flex gap-2">
          <svg height="25" width="25" viewBox="0 0 488.541 488.541" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradAnim" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7C3AED">
                  <animate attributeName="stop-color" values="#7C3AED; #3B82F6; #7C3AED" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#3B82F6">
                  <animate attributeName="stop-color" values="#3B82F6; #7C3AED; #3B82F6" dur="4s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>

            <g fill="url(#gradAnim)" stroke="url(#gradAnim)">
              <path d="M278,296.97v-82.8c10.4-6.9,17.3-18.8,17.3-32.2v-85.9c0-42.7-34.6-77.4-77.4-77.4h-9.2h-9.2c-42.7,0-77.4,34.6-77.4,77.4 v85.9c0,13.5,6.9,25.3,17.3,32.2v82.8c0,1.5-0.8,2.8-2.1,3.4c-11.7,5.7-69,34.7-122.2,78.4c-9.6,7.9-15.1,19.7-15.1,32.2v58.9 h181.4l17.9-82.1c-36.2-50.5,2.7-52.9,9.5-53l0,0l0,0c6.8,0.1,45.7,2.5,9.5,53l17.9,82.1h57.2c-0.6-2-0.9-4-0.9-6.1v-11.8v-52 v-11.8c0-12.3,10-22.2,22.2-22.2h28.4c2.4,0,4.7,0.4,6.8,1.1v-12.9c0-4.2,1.2-8.1,3.2-11.4c-35.2-23.3-64.9-38.3-73-42.2 C278.8,299.77,278,298.47,278,296.97z"></path>
              <path d="M343.1,381.97h-28.4c-3.4,0-6.1,2.7-6.1,6.1v11.8v52v11.8c0,3.4,2.7,6.1,6.1,6.1h28.4c3.4,0,6.1-2.7,6.1-6.1v-11.8v-52 v-11.8C349.3,384.67,346.5,381.97,343.1,381.97z"></path>
              <path d="M400.6,347.97h-28.4c-3.4,0-6.1,2.7-6.1,6.1v45.8v17.9v45.8c0,3.4,2.7,6.1,6.1,6.1h28.4c3.4,0,6.1-2.7,6.1-6.1v-45.8 v-17.9v-45.8C406.7,350.67,404,347.97,400.6,347.97z"></path>
              <path d="M487.8,308.37l-40-64.3c-0.9-1.5-2.4-2.2-3.9-2.2s-3,0.7-3.9,2.2l-40,64.3c-1.9,3.1,0.3,7.1,3.9,7.1h19.7v148.3 c0,3.4,2.7,6.1,6.1,6.1h28.4c3.2,0,5.9-2.5,6.1-5.7l0,0v-98.1v-2.8v-47.9h19.7C487.5,315.47,489.8,311.47,487.8,308.37z"></path>
            </g>
          </svg>
          <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent font-bold animate-gradient-move">UserHub</span>
        </NavLink>

        <button className="md:hidden block relative w-6 h-6 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}></span>
            <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}></span>
            <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}></span>
          </div>
        </button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
        <nav>
          <ul className="md:flex md:gap-4 items-center justify-center w-full text-md font-semibold text-center text-gray-900 pt-4 md:pt-0">
            <li>
              <NavLink to="/" className="py-3 px-4 block hover:text-violet-600 transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className="py-3 px-4 block hover:text-violet-600 transition-colors" onClick={() => setIsOpen(false)}>
                User List
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-user" className="py-3 px-4 block hover:text-violet-600 transition-colors" onClick={() => setIsOpen(false)}>
                Add User
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

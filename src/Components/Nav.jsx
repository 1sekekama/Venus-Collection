import React, { useState } from 'react';
import { NavLinks } from "../Constants";
import { closeIcon, hamburger } from "../assets/icons";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="padding-x py-4 sticky top-0 z-[100] w-full bg-white max-lg:bg-slate-700">
      <nav className="flex justify-between items-center max-container ">
      <a href='/'>
        <h2 className="max-lg:text-white max-lg:bg-inherit text-[#c7563d] bg-[#ede3de] font-palanquin font-extrabold text-[1.5rem] tracking-[0.5rem]
         h-[1.5rem] p-4 rounded-full text-center flex items-center">MO<span className='text-[#f28b0eea]'>HAZ</span></h2>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {NavLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:bg-slate-200 font-montserrat leading-normal text-lg text-black font-bold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block stroke-white fill-white">
          {toggleMenu ? (
            
            <img
              src={closeIcon} 
              width={25}
              height={25}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          ) : (
            <img
              src={hamburger}
              width={25}
              height={25}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
          {toggleMenu && (
            <ul className="absolute flex flex-col gap-10 justify-start  items-center text-end h-[60vh] bg-slate-700 backdrop-blur-ms mt-[1rem] right-0 p-[2rem] top-[47.2px] w-screen">
              {NavLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-montserrat hover:bg-slate-800 leading-normal text-lg text-white font-bold backdrop-blur-md"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

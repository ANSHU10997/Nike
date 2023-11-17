import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants/index"
import {close} from "../assets/icons"
import React from "react"

const Nav = () => {
  const [toggle, setToggle] = React.useState(false)
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-sm:hidden">
          {navLinks.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="font-monserrat leading-normal text-lg text-slate-gray lg:block"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : hamburger}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-coral-red absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl sidebar z-20`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.href}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={nav.href}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default Nav

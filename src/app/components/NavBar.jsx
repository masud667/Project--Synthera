import React from "react";
import Image from "next/image";
import logo from "../assets/synthera_logo.png";
import Link from "next/link";

const NavBar = () => {
  const navItems = (
    <>
      {/* <li>
        <a>Home</a>
      </li>
      <li>
        <a>Shop</a>
      </li> */}
      

      <li><Link href="/" >Home</Link></li>
      <li><Link href="/Shop">Products</Link></li>
      <li><Link href="/dashboard">Dashboard</Link></li>

      <li>
        <a>Synthera AI</a>
      </li>
    </>
  );

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a className="">
              <Image src={logo} alt="Synthera_logo" className="w-44" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary rounded-lg shadow-none px-8">
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full sticky z-50 top-0 py-3 sm:py-5  bg-primary ">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src="/assets/img/logo.svg"
              className="w-24 lg:w-48"
              width={100}
              height={100}
              alt="logo image"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">
            <li className="group pl-6">
              <Link
                href="#about"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                About
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#services"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Services
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#portfolio"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Portfolio
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#clients"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Clients
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#work"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Work
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#statistics"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Statistics
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#blog"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Blog
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#contact"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Contact
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <button>
            <i className="bx bx-menu text-4xl text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { RiUserLine } from 'react-icons/ri';
import { SlArrowDown } from 'react-icons/sl';

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/details',
    label: 'Details',
  },
  {
    href: '/category',
    label: 'Category',
  },
  {
    href: '/myfavourites',
    label: 'My Favourites',
  },
  {
    href: '/profile',
    label: 'Profile',
  },
  {
    href: '/login',
    label: 'Log In/Sign Up',
  },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="border-b sm:border-none grid gap-2 grid-cols-6 p-4">
      {/* logo */}
      <div className="mr-auto">
        <h1 className="text-2xl font-bold">pti.</h1>
      </div>
      {/* search box */}
      <div className="relative col-span-3">
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-transparent bg-white rounded-xl leading-5 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-0 sm:text-sm"
          placeholder="Search Audiobook"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CiSearch className="h-5 w-5 text-red-600" />
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="inline-flex w-40 justify-between items-center p-2 rounded-xl border-b-2 border-transparent leading-5 bg-white focus:outline-none transition duration-500 ease-in-out"
        >
          <p className="font-semibold">MENU</p>
          {dropdownOpen ? (
            <SlArrowDown className="ml-1 h-5 w-5 duration-500 rotate-360 text-orange-600" />
          ) : (
            <SlArrowDown className="ml-1 h-5 w-5 text-orange-400 duration-500 rotate-180" />
          )}
        </button>
        {dropdownOpen && (
          <div className="absolute mt-1 py-2 bg-white w-40 rounded-xl shadow-lg z-20">
            <div className="py-1 shadow-xs">
              <ul className="flex flex-col gap-x-5 text-[14px]">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-orange-500"
                  >
                    <Link className="" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* profile logo */}
      <div className="relative ml-auto hidden sm:block">
        <RiUserLine className="h-10 w-10 rounded-full p-2 text-white bg-[#FD6011]" />
      </div>
    </nav>
  );
}

import React from "react";

import UserDropdown from "../Dropdown/UserDropdown.js";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="top-0 left-0 w-full z-10 shadow-lg bg-zinc-100 md:bg-slate-700 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <Link className="text-white text-sm uppercase hidden lg:inline-block font-semibold" href="/">
              Нүүр хуудас
          </Link>
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
    </>
  );
}

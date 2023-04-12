import Link from "next/link";
import Image from 'next/image';

import React from "react";


const NavBar = ()  => {
  return (
    <div>
    <nav className="fixed bottom-0 w-full z-10 ease-in duration-300 bg-black">
      <ul className="flex flex-col justify-between items-center px-10 py-5  sm:flex-row">
        <li className="sm:justify-">
          <Link href='/'>
            <Image src="/logo.png" alt="Logo" width={32} height={25} />
          </Link>
        </li>
        <li className="">
          <Link className=" text-white hover:text-[#d05424]" href='/jogos'>JOGOS</Link>
        </li>
        <li className="">
          <Link className=" text-white hover:text-[#d05424]" href='/quemSomos'>QUEM SOMOS</Link>
        </li>
        <li className="">
          <Link className=" text-white hover:text-[#d05424]" href='/contato'>CONTATO</Link>
        </li>
        <li className="">
          <Link className=" text-white hover:text-[#d05424]" href='/pressKit'>PRESS KIT</Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}




export default NavBar;

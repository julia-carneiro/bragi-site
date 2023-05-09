import Link from "next/link";
import Image from 'next/image';
import React from "react";

const NavBar = ()  => {
  return (
    <div>
      <nav className="fixed bottom-0 w-full z-10 ease-in duration-300 bg-black px-10 py-11 sm:py-5">
          <ul className="grid grid-cols-3 gap-10 sm:flex mx-5 justify-between items-center">
            <li className="row-span-2">
              <Link href='/'>
                <Image src="/logo.png" alt="Logo" width={64} height={50} className="max-w-full" />
              </Link>
            </li>
            <li>
              <Link className=" text-white hover:text-[#d05424]" href='/jogos'>JOGOS</Link> 
            </li>
            <li>
              <Link className="text-white hover:text-[#d05424]" href='/quemSomos'>QUEM SOMOS</Link>
            </li>
            <li>
              <Link className="text-white hover:text-[#d05424]" href='/contato'>CONTATO</Link>
            </li>
            <li>
              <Link className="text-white hover:text-[#d05424]" href='/pressKit'>PRESS KIT</Link>
            </li>
          </ul>
        
      </nav>
    </div>
  );
}

export default NavBar;

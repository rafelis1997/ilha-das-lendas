'use client';
import Image from "next/image";
import Link from "next/link";
import { House, Trophy } from "phosphor-react";
import { SVGProps } from "react";
import Logo from '../assets/logo.jpg';


export function Header(props: SVGProps<SVGElement>) {
  return (
   <nav className="z-50 border-t-2 md:border-r-2 border-purple-600 drop-shadow-2xl row-start-2 row-end-2 md:row-start-1 md:row-end-1 md:col-start-1 md:col-end-1 sticky bottom-0 md:top-0 w-full h-full max-h-[100vh] flex md:flex-col-reverse items-center justify-center px-2 py-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 to-slate-200">
      <div className="rounded-full w-20 h-20 overflow-hidden absolute bottom-10">
          <Image 
            src={Logo} 
            width={80} 
            height={80} 
            alt="Ilha das lendas logo"
            className="object-cover object-center hidden md:block"
          />
      </div>


      <ul className="flex md:flex-col items-center gap-12 text-lg">
        <li>
          <Link href='/' legacyBehavior>
            <a className="p-2 w-20 h-20 rounded-md text-purple-600 hover:text-purple-100 hover:bg-purple-600 transition-all flex flex-col justify-center items-center">
              <House size={24}  weight="fill"/>
              <span className="font-bold text-base">Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/teams'  legacyBehavior>
            <a className="p-2 w-20 h-20 rounded-md text-purple-600 hover:text-purple-100 hover:bg-purple-600 transition-all flex flex-col justify-center items-center">
              <Trophy size={24} weight="fill" />
              <span className="font-bold text-base">Torneio</span>
            </a>
          </Link>
        </li>
      </ul>
   </nav>
  )
}
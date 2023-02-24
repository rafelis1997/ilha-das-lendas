'use client'
import Image from 'next/image'
import Link from 'next/link'
import { House, Trophy } from 'phosphor-react'
import { SVGProps } from 'react'
import Logo from '../assets/logo.jpg'

export function Header(props: SVGProps<SVGElement>) {
  return (
    <nav
      className="
        sticky 
        bottom-0 
        z-50 
        row-start-2 
        row-end-2 
        flex 
        h-full 
        max-h-[100vh] 
        w-full 
        items-center 
        justify-center 
        border-t-2 
        border-purple-600 
        bg-violet-900
        px-2 
        py-10 
        shadow-xl 
        md:top-0 
        md:col-start-1 
        md:col-end-1 
        md:row-start-1 
        md:row-end-1 
        md:flex-col-reverse 
        md:border-r-2
        md:border-t-0
      "
    >
      <div className="absolute bottom-10 h-20 w-20 overflow-hidden rounded-full">
        <Image
          src={Logo}
          width={80}
          height={80}
          alt="Ilha das lendas logo"
          className="hidden object-cover object-center md:block"
        />
      </div>

      <ul className="flex items-center gap-12 text-lg md:flex-col">
        <li>
          <Link href="/" legacyBehavior>
            <a
              className="
              flex 
              h-20 
              w-20 
              flex-col 
              items-center 
              justify-center 
              rounded-md 
              p-2 
              text-slate-100 
              transition-all 
              hover:bg-purple-600 
              hover:text-purple-100"
            >
              <House size={24} weight="fill" />
              <span className="text-base font-bold">Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/teams" legacyBehavior>
            <a
              className="
                flex 
                h-20 
                w-20 
                flex-col 
                items-center 
                justify-center 
                rounded-md p-2 
                text-slate-100
                transition-all 
                hover:bg-purple-600 
                hover:text-purple-100
              "
            >
              <Trophy size={24} weight="fill" />
              <span className="text-base font-bold">Torneio</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

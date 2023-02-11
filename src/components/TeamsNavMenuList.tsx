'use client';

import { TeamDto } from "@/Dtos/teamsDto";
import Image from "next/image";

export function TeamsNavMenuList ({teamsList}: {teamsList:TeamDto[]}) {
  return (
    <ul 
      className="flex transition-[overflow] scroll-smooth snap-x ease-in-out overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-900 scrollbar-thumb-rounded-md"
      onMouseEnter={el => {el.currentTarget.style.overflowX = "scroll"; el.currentTarget.style.overflow = 'overlay'}}
      onMouseLeave={el => {el.currentTarget.style.overflowX = "hidden"}}
      onFocus={el => {
        el.currentTarget.style.overflowX = "scroll"; 
        el.currentTarget.style.overflow = 'overlay';
        el.currentTarget.parentElement?.scrollTo({left: el.currentTarget.scrollLeft})
      }}
      onTouchStart={el => {el.currentTarget.style.overflowX = "scroll"; el.currentTarget.style.overflow = 'overlay'}}
      onTouchEnd={el => {el.currentTarget.style.overflowX = "hidden"}}
      id="scrollList"
    >
      {teamsList?.map(team => (
        <li key={team.id} className="snap-center p-0">
          <a 
            href={`/teams/${team.teamLinkName}`}
            className="relative outline-none focus-visible:border-4 focus-visible:border-purple-300 bg-purple-900 hover:bg-purple-700 border-r-2 border-purple-600 transition-all w-52 h-36 gap-1 flex flex-col justify-center items-center text-slate-50"
            onFocus={el => {
              const scrollEl = document.getElementById('scrollList')
              scrollEl?.scrollTo({left: el.currentTarget.offsetLeft})
            }}
          >
            <Image src={team.teamLogo} alt={team.teamLinkName} width={80} height={80}/>
            <span className='font-bold'>{team.teamName}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
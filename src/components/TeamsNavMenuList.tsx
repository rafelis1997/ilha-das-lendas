'use client'

import { TeamDto } from '@/Dtos/teamsDto'
import Image from 'next/image'

export function TeamsNavMenuList({ teamsList }: { teamsList: TeamDto[] }) {
  return (
    <ul
      className="
        flex 
        snap-x 
        overflow-x-auto 
        scroll-smooth 
        transition-[overflow] 
        ease-in-out 
        scrollbar-thin 
        scrollbar-track-transparent 
        scrollbar-thumb-slate-200 
        scrollbar-thumb-rounded-md
      "
      onMouseEnter={(el) => {
        el.currentTarget.style.overflowX = 'scroll'
        el.currentTarget.style.overflow = 'overlay'
      }}
      onMouseLeave={(el) => {
        el.currentTarget.style.overflowX = 'hidden'
      }}
      onFocus={(el) => {
        el.currentTarget.style.overflowX = 'scroll'
        el.currentTarget.style.overflow = 'overlay'
        el.currentTarget.parentElement?.scrollTo({
          left: el.currentTarget.scrollLeft,
        })
      }}
      onTouchStart={(el) => {
        el.currentTarget.style.overflowX = 'scroll'
        el.currentTarget.style.overflow = 'overlay'
      }}
      onTouchEnd={(el) => {
        el.currentTarget.style.overflowX = 'hidden'
      }}
      id="scrollList"
    >
      {teamsList?.map((team) => (
        <li key={team.id} className="min-w-52 w-full snap-center p-0">
          <a
            href={`/teams/${team.teamLinkName}`}
            className="
              relative
              flex 
              h-24
              min-w-[200px] 
              flex-col 
              items-center 
              justify-center 
              gap-1 
              border-r-2 
              border-violet-600 
              bg-violet-900 
              text-slate-50 
              outline-none 
              transition-all 
              focus-visible:border-4 
              focus-visible:border-purple-300 
              hover:bg-violet-700
            "
            onFocus={(el) => {
              const scrollEl = document.getElementById('scrollList')
              scrollEl?.scrollTo({
                left: el.currentTarget.offsetLeft,
              })
            }}
          >
            <Image
              src={team.teamLogo}
              alt={team.teamLinkName}
              width={40}
              height={40}
            />
            <span className="font-bold uppercase">{team.teamLinkName}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

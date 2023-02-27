'use client'

import {
  useEffect,
  useRef,
  MouseEvent,
} from 'react'
import Image from 'next/image'
import { motion, HTMLMotionProps } from 'framer-motion'

import { PlayerDto } from '@/Dtos/playerDto'
import { Score } from './Score'
import { Unbounded } from '@next/font/google'
import { PlayerScoreChart } from './PlayerScoreChart'

const unbounded = Unbounded({
  preload: true,
  variable: '--font-unbounded',
  subsets: ['latin'],
})

export type COLORS = 'red' | 'orange' | 'slate' | 'sky' | 'purple' | 'green'

const colorsVariants = {
  red: {
    bg: 'flex flex-col clip-path-cardClip relative w-full h-full justify-start items-center shadow-[inset_1px_0px_51px_3px_rgba(0,0,0,0.9)] bg-red-800',
    gradient:
      'w-full absolute bg-gradient-to-b from-red-800/90 via-red-800/100 to-black bottom-0 pb-10 border-t-2 border-yellow-600',
  },
  orange: {
    bg: 'flex flex-col clip-path-cardClip relative w-full h-full justify-start items-center shadow-[inset_1px_0px_51px_3px_rgba(0,0,0,0.9)] bg-orange-800',
    gradient:
      'w-full absolute bg-gradient-to-b from-orange-800/90 via-orange-800/100 to-black bottom-0 pb-10 border-t-2 border-yellow-600',
  },
  slate: {
    bg: 'flex flex-col clip-path-cardClip relative w-full h-full justify-start items-center shadow-[inset_1px_0px_51px_3px_rgba(0,0,0,0.9)] bg-slate-400',
    gradient:
      'w-full absolute bg-gradient-to-b from-slate-400/90 via-slate-400/100 to-black bottom-0 pb-10 border-t-2 border-yellow-600',
  },
  sky: {
    bg: 'flex flex-col clip-path-cardClip relative w-full h-full justify-start items-center shadow-[inset_1px_0px_51px_3px_rgba(0,0,0,0.9)] bg-sky-600',
    gradient:
      'w-full absolute bg-gradient-to-b from-sky-600/90 via-sky-600/100 to-black bottom-0 pb-10 border-t-2 border-yellow-600',
  },
  purple: {
    bg: 'flex flex-col clip-path-cardClip relative w-full h-full justify-start items-center shadow-[inset_1px_0px_51px_3px_rgba(0,0,0,0.9)] bg-purple-900',
    gradient:
      'w-full absolute bg-gradient-to-b from-purple-900/90 via-purple-900/100 to-black bottom-0 pb-10 border-t-2 border-yellow-600',
  },
  green: {
    bg: 'flex flex-col clip-path-cardClip relative w-full h-full justify-start items-center shadow-[inset_1px_0px_51px_3px_rgba(0,0,0,0.9)] bg-green-800',
    gradient:
      'w-full absolute bg-gradient-to-b from-green-800/90 via-green-800/100 to-black bottom-0 pb-10 border-t-2 border-yellow-600',
  },
} as const

const item = {
  hidden: {
    translateY: 100,
    scale: 0.5,
    opacity: 0,
    rotateY: 360,
    transition: { duration: 1 },
  },
  visible: {
    translateY: 0,
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: { duration: 1 },
  },
  clicked: {
    scale: 0.9,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
  },
}

const click = {
  clicked: {
    from: {
      scale: 1,
    },
    scale: 0.9,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

const draw = {
  zero: { pathLength: 0, opacity: 0 },
  full: (i: number) => {
    const delay = 1 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          duration: 5,
          type: 'spring',
          bounce: 0,
          repeat: Infinity,
        },
        opacity: { delay, duration: 0.5 },
      },
    }
  },
}

interface Props extends HTMLMotionProps<'div'> {
  player: PlayerDto
  teamLogo: string
  teamColor: COLORS
  isSelected: boolean
  setPlayerSelection: (playerNick: PlayerDto | null) => void
}

export function PlayerCard({
  player,
  teamLogo,
  teamColor,
  isSelected,
  setPlayerSelection = () => null,
  ...rest
}: Props) {
  const svgRole = JSON.parse(player.playerRole)
  const roleDiv = useRef<HTMLDivElement | null>(null)

  const chartRef = useRef<HTMLDivElement | null>(null)

  function handlePlayerCardClick(
    event: MouseEvent<HTMLElement>,
    player: PlayerDto
  ) {
    if (isSelected) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return setPlayerSelection(null)
    }

    setPlayerSelection(player)
  }

  useEffect(() => {
    const div = roleDiv.current
    if (div) div.innerHTML = svgRole
    const chartDiv = chartRef.current as HTMLDivElement
    if (chartDiv) chartDiv.scrollIntoView({ behavior: 'smooth' })
  })

  return (
    <motion.li
      key={player.id}
      className={`flex flex-col flex-wrap items-center ${
        isSelected && 'w-full'
      } justify-center`}
      variants={item}
    >
      <motion.div
        {...rest}
        className="relative h-[20rem] w-48 cursor-pointer md:h-[23rem] md:w-60"
        whileTap={{
          scale: 0.95,
          transition: {
            type: 'spring',
            stiffness: 400,
            damping: 17,
          },
        }}
        whileHover={{
          scale: 1.05,
          transition: {
            type: 'spring',
            stiffness: 200,
            damping: 17,
          },
        }}
        onClick={(e) => handlePlayerCardClick(e, player)}
      >
        <motion.svg
          initial="zero"
          animate="full"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0.5 2 87 143"
          className="absolute z-10 stroke-yellow-600"
        >
          <path
            className="fill-yellow-600 stroke-none"
            x="50"
            y="50"
            d="M44,146.76l-.5-1.71c-.1-.33-2.49-8.21-11.12-8.21-4.7,0-28.18-.93-28.18-19.27,0-3,.13-6.5.27-10.19.5-13,1.11-29.2-4-33.61L0,73.38.46,73c5.13-4.41,4.52-20.6,4-33.61-.14-3.7-.27-7.18-.27-10.19,0-18.35,23.48-19.28,28.18-19.28C41,9.91,43.41,2,43.51,1.7L44,0l.5,1.7C44.59,2,47,9.91,55.61,9.91c4.71,0,28.18.93,28.18,19.28,0,3-.13,6.5-.27,10.19-.49,13-1.1,29.2,4,33.61l.45.39-.45.39c-5.13,4.41-4.52,20.6-4,33.61.14,3.69.27,7.18.27,10.19,0,18.34-23.47,19.27-28.18,19.27-8.65,0-11.09,8.13-11.11,8.21ZM1.54,73.38c5.07,5.16,4.49,20.48,4,34-.14,3.68-.27,7.16-.27,10.15,0,17.36,22.62,18.24,27.15,18.24A12.52,12.52,0,0,1,44,143.51a12.53,12.53,0,0,1,11.61-7.7c4.54,0,27.15-.88,27.15-18.24,0-3-.13-6.47-.27-10.15-.51-13.56-1.09-28.88,4-34-5.06-5.16-4.48-20.48-4-34,.14-3.68.27-7.16.27-10.15,0-17.37-22.61-18.25-27.15-18.25A12.53,12.53,0,0,1,44,3.25a12.51,12.51,0,0,1-11.61,7.69c-4.53,0-27.15.88-27.15,18.25,0,3,.13,6.47.27,10.15C6,52.9,6.61,68.22,1.54,73.38Z"
          />
          <motion.path
            stroke="1px"
            variants={draw}
            custom={0.5}
            x="50"
            y="50"
            d="M44,136.56l-.09-.09a16.08,16.08,0,0,0-11.52-4.65c-3.87,0-23.16-.69-23.16-14.25,0-2.91.13-6.35.27-10,.57-15.15.72-27.28-3-34.14l0-.06,0-.06c3.74-6.86,3.59-19,3-34.13-.14-3.65-.27-7.09-.27-10,0-13.57,19.29-14.25,23.16-14.25a16.08,16.08,0,0,0,11.52-4.65L44,10.2l.09.09a16.06,16.06,0,0,0,11.52,4.65c3.87,0,23.16.68,23.16,14.25,0,2.91-.13,6.35-.27,10-.57,15.15-.71,27.28,3,34.14l0,.06,0,.06c-3.74,6.86-3.6,19-3,34.13.14,3.65.27,7.09.27,10,0,13.56-19.29,14.25-23.16,14.25a16.06,16.06,0,0,0-11.52,4.65ZM6.74,73.38c3.73,6.92,3.59,19.06,3,34.2-.14,3.65-.27,7.08-.27,10,0,13.32,19.08,14,22.9,14A16.28,16.28,0,0,1,44,136.2a16.32,16.32,0,0,1,11.61-4.64c3.83,0,22.9-.67,22.9-14,0-2.91-.13-6.34-.26-10-.58-15.15-.72-27.29,3-34.21-3.74-6.93-3.6-19.06-3-34.2.13-3.65.26-7.09.26-10,0-13.32-19.07-14-22.9-14A16.35,16.35,0,0,1,44,10.56a16.32,16.32,0,0,1-11.61,4.63c-3.82,0-22.9.68-22.9,14,0,2.9.13,6.34.27,10C10.33,54.31,10.47,66.45,6.74,73.38Z"
          />
        </motion.svg>

        <div
          className={`
          ${colorsVariants[teamColor as keyof typeof colorsVariants].bg}`}
        >
          <Score
            scores={player.score}
            className={`absolute left-6 top-10 z-20 flex flex-col-reverse items-center leading-none md:left-8 md:top-16 ${unbounded.className} text-shadow-lg`}
          />

          <Image
            src={teamLogo}
            width={300}
            height={300}
            alt=""
            className="absolute top-10 -z-10 opacity-25"
          />

          <Image
            width={60}
            height={60}
            src="https://am-a.akamaihd.net/image?resize=60:&amp;f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Fcblol-logo-symbol-offwhite.png"
            alt=""
            className="absolute mt-6 h-[40px] w-[40px] motion-safe:animate-pulse md:h-[60px] md:w-[60px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 146.76"
            className="absolute h-0 w-0"
          >
            <clipPath id="clipSvg" clipPathUnits="objectBoundingBox">
              <path d="M0.5,0 S0.529,0.06,0.634,0.06 S0.955,0.08,0.955,0.191 C0.955,0.288,0.922,0.459,1,0.5 C0.922,0.541,0.955,0.712,0.955,0.809 C0.955,0.92,0.74,0.94,0.634,0.94 S0.5,1,0.5,1 S0.471,0.94,0.366,0.94 S0.046,0.92,0.046,0.809 C0.046,0.712,0.078,0.541,0,0.5 C0.078,0.459,0.046,0.288,0.046,0.191 C0.046,0.08,0.26,0.06,0.366,0.06 S0.5,0,0.5,0"></path>
            </clipPath>
          </svg>

          <Image
            src={player?.playerPhoto}
            width={402}
            height={329}
            alt={player?.playerNick}
            className="mt-16 aspect-auto max-h-[175px] min-h-[170px] object-contain md:mt-24"
          />
          <div
            className={`${
              colorsVariants[teamColor as keyof typeof colorsVariants].gradient
            }`}
          >
            <div
              className="
              bottom-3 
              flex 
              flex-col
              items-center 
              justify-end 
              gap-1 
              px-5
              text-center
              font-extrabold
              text-slate-100
            "
            >
              <p className="text-shadow">{player.playerNick}</p>
              <p className="text-xs font-normal capitalize text-shadow">
                {player.playerName.toLowerCase()}
              </p>
              <div ref={roleDiv} className="[&>svg]:h-6 [&>svg]:w-6"></div>
            </div>
          </div>
        </div>
      </motion.div>
      {isSelected && (
        <div ref={chartRef} className="flex h-full w-full justify-center">
          <PlayerScoreChart
            playerNick={player?.playerNick}
            playerScores={player?.score.map((score) => score.score)}
          />
        </div>
      )}
    </motion.li>
  )
}

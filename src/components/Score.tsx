'use client'
import { motion } from 'framer-motion'
import { ArrowFatDown, ArrowFatUp, Stop } from 'phosphor-react'
import { HTMLAttributes, ReactElement } from 'react'
import { Unbounded } from '@next/font/google'

const unbounded = Unbounded({ subsets: ['latin'] })

interface Props extends HTMLAttributes<HTMLDivElement> {
  scores: {
    score: number
  }[]
}

export function Score({ scores, ...rest }: Props) {
  const evolution = scores[0].score - scores[1].score
  const arrow =
    evolution !== 0 ? (
      evolution > 0 ? (
        <ArrowFatUp
          weight="fill"
          size={28}
          className="animate-bounce text-green-400"
        />
      ) : (
        <ArrowFatDown
          weight="fill"
          size={28}
          className="animate-bounce text-yellow-300"
        />
      )
    ) : (
      <Stop weight="fill" size={28} className="animate-pulse text-purple-400" />
    )

  return (
    <div {...rest}>
      {arrow}
      <svg
        viewBox="-1 -25 45 35"
        className="flex w-[60px] justify-center bg-transparent text-center md:w-[70px]"
      >
        <text
          style={unbounded.style}
          className={`bg-transparent fill-slate-100 text-center text-lg font-extrabold uppercase [filter:drop-shadow(2px_2px_0px_theme(colors.lime.500))] md:text-2xl md:text-2xl`}
        >
          {scores[0].score}
        </text>
      </svg>
      {/* <span
        className="text-4xl font-extrabold text-slate-100"
        style={unbounded.style}
      >
        {scores[0].score}
      </span> */}
    </div>
  )
}

'use client'
// import { motion } from 'framer-motion'
import { ArrowFatDown, ArrowFatUp, Equals } from 'phosphor-react'
import { HTMLAttributes } from 'react'
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
      <Equals weight="fill" size={38} className="animate-pulse text-purple-400" />
    )

  return (
    <div {...rest}>
      {arrow}
      <div className="flex w-[60px] justify-center bg-transparent text-center md:w-[70px]">
        <h1
          style={unbounded.style}
          className={`bg-transparent text-center text-xl font-extrabold uppercase text-slate-100 [filter:drop-shadow(2px_2px_0px_theme(colors.lime.500))] md:text-4xl`}
        >
          {scores[0].score}
        </h1>
      </div>
    </div>
  )
}

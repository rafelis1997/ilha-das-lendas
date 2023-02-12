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
          className="animate-bounce text-blue-500"
        />
      ) : (
        <ArrowFatDown
          weight="fill"
          size={28}
          className="animate-bounce text-red-500"
        />
      )
    ) : (
      <Stop weight="fill" size={28} className="animate-pulse text-purple-900" />
    )

  return (
    <div {...rest}>
      {arrow}
      <span
        className="text-4xl font-extrabold text-slate-100"
        style={unbounded.style}
      >
        {scores[0].score}
      </span>
    </div>
  )
}

'use client';
import { motion } from "framer-motion";
import { ArrowFatDown, ArrowFatUp, Stop } from "phosphor-react";
import { HTMLAttributes, ReactElement } from "react";
import { Unbounded } from '@next/font/google'

const unbounded = Unbounded({subsets: ['latin']})


interface Props extends HTMLAttributes<HTMLDivElement> {
  scores: {
    score: number
  }[]
}

export function Score({scores, ...rest}: Props) {
  const evolution = scores[0].score - scores[1].score
  const arrow = evolution !== 0 ? 
    evolution > 0 ? 
      <ArrowFatUp weight="fill" size={28} className="text-blue-500 animate-bounce"/> 
        :  
      <ArrowFatDown weight="fill"  size={28} className="text-red-500 animate-bounce"/>
    :
    <Stop weight="fill" size={28} className="text-purple-900 animate-pulse"/> 

  return (
    <div {...rest}>
      {arrow}
      <span className="text-slate-100 font-extrabold text-4xl" style={unbounded.style}>{scores[0].score}</span>
    </div>
  )
}
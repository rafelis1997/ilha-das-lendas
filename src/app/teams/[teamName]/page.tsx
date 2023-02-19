'use client'
import { motion } from 'framer-motion'

import { Loading } from '@/components/Loading'
import { PlayerCard } from '@/components/PlayerCard'
import { useTeamData } from '@/hooks/useTeamData'
import { TeamHeader } from '@/components/TeamHeader'
import { Unbounded } from '@next/font/google'
import { ChartBar } from 'phosphor-react'

const unbounded = Unbounded({
  preload: true,
  variable: '--font-unbounded',
  subsets: ['latin'],
})

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

export default function TeamPage({ params }: { params: { teamName: string } }) {
  const { teamName } = params

  const { data, isLoading } = useTeamData(teamName)

  const teamAverage =
    data?.player
      .filter((player) => player.mainRoaster !== false)
      .reduce((acc, player) => {
        return acc + player.score[0].score
      }, 0)! / 5

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={`flex h-full min-h-screen flex-col pb-8`}>
      <TeamHeader teamName={teamName} />

      <div className="box-content flex w-full flex-col py-12 lg:flex-row">
        <div className="m-6 flex h-fit flex-col items-center justify-start gap-2 rounded-md bg-purple-600 p-12 px-2 shadow-[8px_8px_0px_theme(colors.lime.500)] md:mt-24 md:w-full md:max-w-[450px]">
          <div className="flex w-full items-center justify-start gap-4 px-6">
            <ChartBar
              size={48}
              weight="fill"
              className="fill text-lime-500 [filter:drop-shadow(2px_2px_0px_theme(colors.violet.900))]"
            />
            <svg viewBox="0 -24 260 30" className="h-fit md:ml-6">
              <text
                className={`bg-transparent fill-lime-500 text-lg font-extrabold uppercase italic [filter:drop-shadow(2px_2px_0px_theme(colors.violet.900))] md:text-2xl`}
                style={{ fontFamily: unbounded.style.fontFamily }}
              >
                Estatísticas
              </text>
            </svg>
          </div>
          <div
            className="flex w-full flex-col gap-2 px-6 text-xl font-bold text-slate-100"
            style={unbounded.style}
          >
            <span>Colocação: {data?.position}º</span>
            <span>Pontuação média: {Math.floor(teamAverage)} pts.</span>
            <span>Win Rate: {data?.teamRecord}</span>
          </div>
        </div>

        <motion.ul
          className="flex h-full w-full flex-wrap items-start justify-center gap-16 bg-transparent p-2 px-8 pt-12 md:gap-24 md:px-16"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {data?.player
            .filter((player) => player.mainRoaster !== false)
            .map((player) => (
              <PlayerCard
                player={player}
                key={player.id}
                teamLogo={data.teamLogo}
                teamColor={data.teamColor}
              />
            ))}
        </motion.ul>
      </div>
    </div>
  )
}

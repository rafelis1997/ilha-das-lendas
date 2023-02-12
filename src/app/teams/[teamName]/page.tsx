'use client'
import { motion } from 'framer-motion'

import { Loading } from '@/components/Loading'
import { PlayerCard } from '@/components/PlayerCard'
import { useTeamData } from '@/hooks/useTeamData'
import { TeamHeader } from '@/components/TeamHeader'

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
    <div className={`flex h-full min-h-screen flex-col`}>
      <TeamHeader teamName={teamName} />

      <h1 className="bg-slate-200 p-6 text-4xl font-extrabold text-purple-900 md:text-4xl">
        Colocação: {data?.position}º
      </h1>
      <h1 className="bg-slate-200 p-6 text-4xl font-extrabold text-purple-900 md:text-4xl">
        Média do Time: {Math.floor(teamAverage)}
      </h1>
      <motion.ul
        className="flex h-full w-full flex-wrap items-start justify-center gap-12 bg-slate-200 p-2 px-16 pt-12 md:gap-24"
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
  )
}

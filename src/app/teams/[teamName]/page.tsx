'use client'
import { useState, MouseEvent, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'

import { Loading } from '@/components/Loading'
import { PlayerCard } from '@/components/PlayerCard'
import { useTeamData } from '@/hooks/useTeamData'
import { TeamHeader } from '@/components/TeamHeader'
import { TeamStats } from '@/components/TeamStats'
import { PlayerDto } from '@/Dtos/playerDto'
import { format } from 'date-fns'
import { toPng } from 'html-to-image'

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
    },
  },
}

export default function TeamPage({ params }: { params: { teamName: string } }) {
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerDto | null>()

  const { teamName } = params

  const { data, isLoading } = useTeamData(teamName)

  // const ref = useRef<HTMLDivElement>(null)

  // const getFileName = (fileType: string) =>
  //   `${format(new Date(), "'playerCard-'HH-mm-ss")}.${fileType}`

  // const downloadPng = useCallback(() => {
  //   if (ref.current === null) {
  //     return
  //   }
  //   toPng(ref.current, { cacheBust: true })
  //     .then((dataUrl) => {
  //       const link = document.createElement('a')
  //       link.download = `${getFileName('png')}`
  //       link.href = dataUrl
  //       link.click()
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [ref])

  const teamAverage =
    data?.player
      .filter((player) => player.mainRoaster !== false)
      .reduce((acc, player) => {
        return acc + player.score[0].score
      }, 0)! / 5

  function handleSetSelectedPlayer(player: PlayerDto | null) {
    setSelectedPlayer(player)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={`flex h-full min-h-screen flex-col pb-8`}>
      <TeamHeader teamName={teamName} />

      <div className="box-content flex w-full flex-col py-12 xl:flex-row">
        <TeamStats
          teamAverage={teamAverage}
          teamPosition={data!.position}
          teamRecord={data!.teamRecord}
        />

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
                isSelected={player.playerNick === selectedPlayer?.playerNick}
                setPlayerSelection={handleSetSelectedPlayer}
              />
            ))}
        </motion.ul>
      </div>
    </div>
  )
}

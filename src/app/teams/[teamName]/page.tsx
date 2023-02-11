'use client';
import { motion } from 'framer-motion'

import { Loading } from '@/components/Loading';
import { PlayerCard } from '@/components/PlayerCard';
import { useTeamData } from '@/hooks/useTeamData';
import { TeamHeader } from '@/components/TeamHeader';


const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};


export default function TeamPage({params}: {params: {teamName: string}}) {
  const {teamName} = params

  const {data, isLoading} = useTeamData(teamName)

  const teamAverage = data?.player.filter(player => player.mainRoaster !== false)
    .reduce((acc, player) => {
      return acc + player.score[0].score
    }, 0)! / 5

  if(isLoading) {
    return <Loading />
  }

  return (
    <div className={`flex flex-col h-full min-h-screen`}>

      <TeamHeader teamName={teamName}/>

      <h1 className='font-extrabold bg-slate-200 text-4xl md:text-4xl text-purple-900 p-6'>Colocação: {data?.position}º</h1>
      <h1 className='font-extrabold bg-slate-200 text-4xl md:text-4xl text-purple-900 p-6'>Média do Time: {Math.floor(teamAverage)}</h1>
      <motion.ul className='flex flex-wrap justify-center items-start pt-12 gap-12 md:gap-24 w-full h-full p-2 px-16 bg-slate-200' variants={container} initial="hidden" animate="visible">
        {data?.player.filter(player => player.mainRoaster !== false).map(player => (
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
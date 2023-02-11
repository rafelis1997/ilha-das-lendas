'use client';
import Image from 'next/image'
import { useQuery} from 'react-query'
import { motion } from 'framer-motion'

import { api } from '@/lib/axios';
import { TeamDto } from '@/Dtos/teamsDto';
import { Loading } from '@/components/Loading';
 
const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { translateY: 100, scale: 0.5, opacity: 0 },
  visible: { translateY: 0, scale: 1, opacity: 1 }
};

export default function Teams() {

  const { data, isLoading } = useQuery('teams', async () => {
      const { data } = await api.get('/teams')
      return data as TeamDto[]
    }
  )

  if(isLoading) {
    return <Loading />
  }

  return (
    <main className=" flex flex-col w-full h-full min-h-screen">
      <div className='flex justify-start gap-8 items-center w-full py-4 px-16 text-2xl bg-purple-900'>
        <Image 
          src="https://am-a.akamaihd.net/image?resize=120:&amp;f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Fcblol-logo-symbol-offwhite.png" 
          alt="logo cblol" 
          width={80} 
          height={80}
        />
        <h1 className='text-[#ebefe4] font-extrabold'>CBLOL</h1> 
      </div>
      
      <motion.ul 
        className='flex flex-wrap flex-1 pb-16 justify-center mx-auto gap-2 px-6 pt-12 bg-slate-200'
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {data && data.map(team => (
          <motion.li key={team.id} variants={item}>
            <motion.a 
              href={`/teams/${team.teamLinkName}`}
              className="relative rounded-md bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 to-blue-900 hover:scale-[1.05] transition-all w-52 h-72 gap-6 flex flex-col justify-center items-center text-slate-50"
              initial={{backgroundSize: "120% 120%"}}
              animate={{backgroundSize: "250% 250%"}}
              transition={{repeat: Infinity, duration: 5 }}
            >
              <span className='absolute left-3 top-3 text-lg font-bold'>{team.position}º</span>
              <Image src={team.teamLogo} alt={team.teamLinkName} width={120} height={120}/>
              <span className='font-bold'>{team.teamName}</span>
              <span className='font-bold text-xl'>{team.teamRecord}</span>
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </main>
  )
}

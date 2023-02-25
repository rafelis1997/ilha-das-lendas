'use client'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { motion } from 'framer-motion'

import { api } from '@/lib/axios'
import { TeamDto } from '@/Dtos/teamsDto'
import { Loading } from '@/components/Loading'

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { translateY: 100, scale: 0.5, opacity: 0 },
  visible: { translateY: 0, scale: 1, opacity: 1 },
}

export default function Teams() {
  const { data, isLoading } = useQuery('teams', async () => {
    const { data } = await api.get('/teams')
    return data as TeamDto[]
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <main className=" flex h-full min-h-screen w-full flex-col">
      <div className="flex w-full items-center justify-start gap-8 bg-lime-500 py-4 px-16 text-2xl">
        <Image
          src="https://am-a.akamaihd.net/image?resize=120:&amp;f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Fcblol-logo-symbol-black.png"
          alt="logo cblol"
          width={80}
          height={80}
        />
        <h1 className="text-3xl font-extrabold text-purple-900">CBLOL</h1>
      </div>

      <motion.ul
        className="mx-auto flex flex-1 flex-wrap justify-center gap-2 px-6 pb-16
        pt-12
        "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {data &&
          data.map((team) => (
            <motion.li key={team.id} variants={item}>
              <motion.a
                href={`/teams/${team.teamLinkName}`}
                className="
                  relative
                  m-2
                  flex h-72 
                  w-52 
                  flex-col 
                  items-center 
                  justify-center 
                  gap-6 
                  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
                  from-violet-600 
                  to-blue-600 
                  text-slate-50 
                  shadow-[4px_4px_1px_lime-500] 
                  shadow-lime-500
                  drop-shadow-xl
                  transition-all 
                  hover:scale-[1.05]
                  hover:shadow-[8px_8px_1px_lime-500]
                  hover:shadow-lime-500
                "
                initial={{ backgroundSize: '120% 120%' }}
                animate={{ backgroundSize: '250% 250%' }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <span className="absolute left-3 top-3 text-lg font-bold">
                  {team.position}º
                </span>
                <Image
                  src={team.teamLogo}
                  alt={team.teamLinkName}
                  width={120}
                  height={120}
                />
                <span className="max-w-[120px] text-center text-2xl font-bold">
                  {team.teamName}
                </span>
                <span className="text-xl font-bold">{team.teamRecord}</span>
              </motion.a>
            </motion.li>
          ))}
      </motion.ul>
    </main>
  )
}

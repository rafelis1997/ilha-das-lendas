import { useTeamData } from '@/hooks/useTeamData'
import { motion } from 'framer-motion'
import Image from 'next/image'

const colorsVariants = {
  red: 'bg-red-800',
  orange: 'bg-orange-800',
  slate: 'bg-slate-400',
  sky: 'bg-sky-600',
  purple: 'bg-purple-900',
  green: 'bg-green-800',
} as const

export function TeamHeader({ teamName }: { teamName: string }) {
  const { data: teamsData, isLoading } = useTeamData(teamName)

  return (
    <div
      className={`${
        colorsVariants[teamsData?.teamColor as keyof typeof colorsVariants]
      } flex w-full items-center justify-start gap-8 py-4 px-16 text-2xl shadow-lg`}
    >
      <motion.div
        className="flex items-center gap-8"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Image
          src={teamsData?.teamLogo!}
          width={80}
          height={80}
          alt={teamsData?.teamLinkName!}
        />
        <h1 className="font-extrabold text-slate-100">
          {teamsData && teamsData.teamName}
        </h1>
      </motion.div>
    </div>
  )
}

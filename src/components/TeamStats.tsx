import { Unbounded } from '@next/font/google'
import { ChartBar } from 'phosphor-react'

const unbounded = Unbounded({
  preload: true,
  variable: '--font-unbounded',
  subsets: ['latin'],
})

interface Props {
  teamAverage: number
  teamRecord: string
  teamPosition: number
}

export function TeamStats({ teamAverage, teamPosition, teamRecord }: Props) {
  return (
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
        <span>Colocação: {teamPosition}º</span>
        <span>Pontuação média: {Math.floor(teamAverage)} pts.</span>
        <span>Win Rate: {teamRecord}</span>
        <span className="font-regular mt-5 text-base text-lime-500">
          Clique nos jogadores para ver as estatísticas individuais
        </span>
      </div>
    </div>
  )
}

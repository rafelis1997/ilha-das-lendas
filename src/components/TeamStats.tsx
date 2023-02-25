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
    <div className="m-6 flex h-fit flex-col items-center justify-start gap-2 rounded-md bg-violet-600 p-12 px-2 shadow-[8px_8px_0px_theme(colors.lime.500)] xl:mt-24 xl:ml-28 xl:w-full xl:max-w-[450px]">
      <div className="flex w-full items-center justify-start gap-4 px-6">
        <ChartBar
          size={48}
          weight="fill"
          className="text-lime-500 [filter:drop-shadow(4px_4px_0px_theme(colors.violet.900))]"
        />
        <div className="h-fit">
          <h1
            className={`bg-transparent text-3xl font-extrabold uppercase text-lime-500 [filter:drop-shadow(4px_4px_0px_theme(colors.violet.900))]`}
            style={{ fontFamily: unbounded.style.fontFamily }}
          >
            Estatísticas
          </h1>
        </div>
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

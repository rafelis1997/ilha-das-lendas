import { Unbounded } from '@next/font/google'
import colors from 'tailwindcss/colors'
import { ChartBar } from 'phosphor-react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  scales,
} from 'chart.js'
import { HTMLAttributes } from 'react'

const unbounded = Unbounded({
  preload: true,
  variable: '--font-unbounded',
  subsets: ['latin'],
})

interface Props extends HTMLAttributes<HTMLDivElement> {
  playerNick: string
  playerScores: number[]
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  scales
)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 6,
      borderWidth: 4,
      hoverRadius: 8,
      hoverBorderWidth: 4,
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Pontuação',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: colors.lime[500],
      },
      ticks: {
        font: {
          size: 16,
          weight: 'bold',
        },
        color: colors.lime[500],
      },
      grid: {
        color: colors.lime[500],
        lineWidth: 2,
      },
    },
    x: {
      title: {
        display: true,
        text: 'Semanas',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: colors.lime[500],
      },
      ticks: {
        font: {
          size: 16,
          weight: 'bold',
        },
        color: colors.lime[500],
      },
      grid: {
        color: colors.purple[300],
        lineWidth: 2,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
      labels: {
        font: {
          size: 16,
          weight: 'bold',
        },
        color: colors.lime[500],
      },
    },
    title: {
      display: true,
      text: 'Score por semana',
      font: {
        size: 24,
        weight: 'bold',
      },
      color: colors.lime[500],
    },
  },
}

export function PlayerScoreChart({ playerNick, playerScores, ...rest }: Props) {
  const data = {
    labels: playerScores.map((_, index) => index + 1),
    datasets: [
      {
        fill: true,
        label: 'scores',
        data: playerScores,
        borderColor: colors.lime[500],
        backgroundColor: colors.purple[700],
      },
    ],
  }

  return (
    <div
      {...rest}
      className="m-6 flex h-fit w-[80%] flex-col items-center justify-start gap-2 rounded-md bg-purple-600 p-12 px-2 shadow-[8px_8px_0px_theme(colors.lime.500)] md:mt-24 "
    >
      <div className="flex w-full items-center justify-start gap-4 px-6">
        <ChartBar
          size={48}
          weight="fill"
          className="fill text-lime-500 [filter:drop-shadow(2px_2px_0px_theme(colors.violet.900))]"
        />
        <svg viewBox="0 -24 260 30" className="h-fit max-w-[450px] md:ml-6">
          <text
            className={`bg-transparent fill-lime-500 text-lg font-extrabold uppercase italic [filter:drop-shadow(2px_2px_0px_theme(colors.violet.900))] md:text-2xl`}
            style={{ fontFamily: unbounded.style.fontFamily }}
          >
            {playerNick}
          </text>
        </svg>
      </div>
      <div
        className="text-lime-500100 relative flex w-full flex-col gap-2 px-6 text-xl font-bold md:w-9/12"
        style={unbounded.style}
      >
        <Line options={options} data={data} />
      </div>
    </div>
  )
}

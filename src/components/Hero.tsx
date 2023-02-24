import { Unbounded } from '@next/font/google'
import Image from 'next/image'

import Card1 from '../assets/playerCard1.png'
import Card2 from '../assets/playerCard2.png'
import Card3 from '../assets/playerCard3.png'
import Card4 from '../assets/playerCard4.png'
import Card5 from '../assets/playerCard5.png'
import Card6 from '../assets/playerCard6.png'

const unbounded = Unbounded({
  preload: true,
  variable: '--font-unbounded',
  subsets: ['latin'],
})

export function Hero() {
  return (
    <div
      className="
          grainy
          flex
          h-screen
          w-full 
          justify-center 
          gap-6 
          overflow-hidden 
          px-12 
          shadow-2xl 
          md:h-[85vh] 
          md:flex-row
          md:justify-between
          lg:px-64 
        "
    >
      <div className="-z-1 absolute mt-96 grid h-full w-auto -rotate-3 grid-cols-2 gap-x-24 gap-y-8 opacity-50 lg:mt-36 xl:opacity-100 [&>*:nth-child(even)]:relative [&>*:nth-child(even)]:top-16">
        <Image
          src={Card1}
          alt="as lendas do ilha das lendas"
          width={200}
          height={200}
          className="w-[230px] object-contain "
        />
        <Image
          src={Card2}
          alt="as lendas do ilha das lendas"
          width={200}
          height={200}
          className="w-[230px] object-contain "
        />
        <Image
          src={Card3}
          alt="as lendas do ilha das lendas"
          width={200}
          height={200}
          className="w-[230px] object-contain "
        />
        <Image
          src={Card4}
          alt="as lendas do ilha das lendas"
          width={200}
          height={200}
          className="w-[230px] object-contain "
        />
        <Image
          src={Card5}
          alt="as lendas do ilha das lendas"
          width={200}
          height={200}
          className="w-[230px] object-contain "
        />
        <Image
          src={Card6}
          alt="as lendas do ilha das lendas"
          width={200}
          height={200}
          className="w-[230px] object-contain"
        />
      </div>
      <div className=" z-10 flex w-full flex-col items-end justify-start gap-6">
        <div className="mt-16 w-full max-w-[500px] text-lime-500">
          <h1
            className={`text-right text-7xl font-extrabold md:text-8xl ${unbounded.className}`}
          >
            ILHA DAS LENDAS
          </h1>
        </div>
        <div
          className={`
              ${unbounded.className} 
              mt-16 
              mr-0 
              flex
              w-full
              justify-end
              text-right
              text-3xl
              font-bold
              text-slate-100 
              md:mt-36
              md:ml-24
              md:text-3xl
              `}
        >
          <div
            className={`
                max-w-[26rem]
                text-center
                text-3xl
                font-bold 
                text-slate-100
                md:text-3xl`}
          >
            Aqui apenas a
            <span className="text-center text-3xl font-extrabold text-lime-500 md:text-3xl">
              {' true '}
            </span>
            é falada, nada além disso!
          </div>
        </div>
      </div>
    </div>
  )
}

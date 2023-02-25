import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { Unbounded } from '@next/font/google'
import Image, { StaticImageData } from 'next/image'
import { InstagramLogo, TwitchLogo, TwitterLogo } from 'phosphor-react'
import { motion, Variants } from 'framer-motion'

const unbounded = Unbounded({
  preload: true,
  variable: '--font-unbounded',
  subsets: ['latin'],
})

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant: 'primary' | 'secondary' | 'tertiary'
  path: StaticImageData
  name: string
  socialMedia: {
    instagram: string
    twitter: string
    twitch: string
  }
  rotScale: number
}

const bounce = {
  visible: (i: number) => ({
    rotate: i * 12,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.1,
      ease: 'anticipate',
      repeatDelay: 0.5,
    },
  }),
  hidden: { rotate: 0 },
}

const variants = {
  primary: 'bg-[url(../assets/artboard_1.svg)]',
  secondary: 'bg-[url(../assets/artboard_2.svg)]',
  tertiary: 'bg-[url(../assets/artboard_3.svg)]',
}

export const MemberCard = forwardRef<HTMLDivElement, Props>(function MemberCard(
  { variant, path, name, socialMedia, className, rotScale, ...rest },
  ref
) {
  return (
    <div
      className={`${className} ${unbounded.className} relative drop-shadow-xl`}
      {...rest}
      ref={ref}
    >
      <div className="z-10 flex h-[300px] ">
        <Image
          src={path}
          alt={name}
          width={1000}
          height={1000}
          className="h-[300px] w-[300px] rounded-md rounded-r-none border-8 border-lime-500 drop-shadow-3xl"
        />
        <div className=" flex h-full flex-col gap-4 rounded-md rounded-l-none bg-violet-500 py-12 px-2 text-xs text-slate-100">
          <a className="flex cursor-pointer flex-col items-center justify-center gap-2 hover:scale-[105%]">
            <InstagramLogo size={32} weight="fill" />
            <span className="... w-[80px] overflow-hidden text-ellipsis text-center">
              {socialMedia.instagram}
            </span>
          </a>
          <a className="flex cursor-pointer flex-col items-center justify-center gap-2 hover:scale-[105%]">
            <TwitchLogo size={32} weight="fill" />
            <span className="... w-[80px] overflow-hidden text-ellipsis text-center">
              {socialMedia.instagram}
            </span>
          </a>
          <a className="flex cursor-pointer flex-col items-center justify-center gap-2 hover:scale-[105%]">
            <TwitterLogo size={32} weight="fill" />
            <span className="... w-[80px] overflow-hidden text-ellipsis text-center">
              {socialMedia.instagram}
            </span>
          </a>
        </div>
      </div>
      <motion.div
        className={`${variants[variant]} absolute bottom-0 z-20 flex min-h-[100px] w-full items-end justify-center bg-bottom bg-no-repeat object-contain`}
        animate="visible"
        custom={rotScale}
        variants={bounce as Variants}
      >
        <span
          className={`mb-8 text-center text-3xl font-semibold text-slate-100`}
        >
          {name}
        </span>
      </motion.div>
    </div>
  )
})

export const MotionMemberCard = motion(MemberCard, { forwardMotionProps: true })

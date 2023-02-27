import { forwardRef, HTMLAttributes } from 'react'
import { Unbounded } from '@next/font/google'
import Image, { StaticImageData } from 'next/image'
import { InstagramLogo, TwitchLogo, TwitterLogo } from 'phosphor-react'
import { motion, useAnimation, Variants } from 'framer-motion'

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

const socialAnim = {
  initial: {
    scaleX: 0,
    originX: '0%',
    transitionEnd: {
      display: 'none',
    },
  },
  hover: {
    scaleX: 1,
    display: 'flex',
  },
} as Variants

const socialAnimItems = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.05,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
    },
  },
} as Variants

const variants = {
  primary: 'bg-[url(../assets/artboard_1.svg)]',
  secondary: 'bg-[url(../assets/artboard_2.svg)]',
  tertiary: 'bg-[url(../assets/artboard_3.svg)]',
}

export const MemberCard = forwardRef<HTMLDivElement, Props>(function MemberCard(
  { variant, path, name, socialMedia, className, rotScale, ...rest },
  ref
) {
  const controls = useAnimation()
  function handleMouseEnterControls() {
    controls.start('hover')
    controls.start('visible')
  }

  function handleMouseLeaveControls() {
    controls.start('initial')
    controls.start('hidden')
  }
  return (
    <div
      className={`${className} ${unbounded.className} relative drop-shadow-xl`}
      {...rest}
      ref={ref}
    >
      <div
        className="z-10 flex h-[200px] lg:h-[300px]"
        onMouseEnter={handleMouseEnterControls}
        onMouseLeave={handleMouseLeaveControls}
      >
        <Image
          src={path}
          alt={name}
          width={1000}
          height={1000}
          className="h-[200px] w-[200px] rounded-md rounded-r-none border-8 border-lime-500 drop-shadow-3xl lg:h-[300px] lg:w-[300px]"
        />
        <motion.div
          className="flex h-full scale-x-0 flex-col gap-4 rounded-md rounded-l-none bg-violet-500 py-4 px-2 text-xs text-slate-100 lg:py-12"
          variants={socialAnim}
          animate={controls}
          initial="initial"
        >
          <motion.a
            variants={socialAnimItems}
            animate={controls}
            initial="hidden"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 hover:scale-[105%]"
          >
            <InstagramLogo
              className="h-[20px] w-[20px] lg:h-[32px] lg:w-[32px]"
              weight="fill"
            />
            <span className="... w-[80px] overflow-hidden text-ellipsis text-center">
              {socialMedia.instagram}
            </span>
          </motion.a>
          <motion.a
            className="flex cursor-pointer flex-col items-center justify-center gap-2 hover:scale-[105%]"
            variants={socialAnimItems}
            animate={controls}
            initial="hidden"
          >
            <TwitchLogo
              className="h-[20px] w-[20px] lg:h-[32px] lg:w-[32px]"
              weight="fill"
            />
            <span className="... w-[80px] overflow-hidden text-ellipsis text-center">
              {socialMedia.instagram}
            </span>
          </motion.a>
          <motion.a
            className="flex cursor-pointer flex-col items-center justify-center gap-2 hover:scale-[105%]"
            variants={socialAnimItems}
            animate={controls}
            initial="hidden"
          >
            <TwitterLogo
              className="h-[20px] w-[20px] lg:h-[32px] lg:w-[32px]"
              weight="fill"
            />
            <span className="... w-[80px] overflow-hidden text-ellipsis text-center">
              {socialMedia.instagram}
            </span>
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        className={`${variants[variant]} absolute bottom-0 z-20 flex min-h-[70px] w-full items-center justify-center bg-bottom bg-no-repeat object-contain lg:min-h-[100px] lg:items-end`}
        animate="visible"
        custom={rotScale}
        variants={bounce as Variants}
      >
        <span
          className={`text-center text-xl font-semibold text-slate-100 lg:mb-8 lg:text-3xl`}
        >
          {name}
        </span>
      </motion.div>
    </div>
  )
})

export const MotionMemberCard = motion(MemberCard)

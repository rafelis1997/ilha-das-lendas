'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Hero } from '@/components/Hero'
import { MotionMemberCard } from '@/components/MemberCard'
import colors from 'tailwindcss/colors'

import { mockedPlayers } from '@/data/mockedPlayers'
import { COLORS } from '@/components/PlayerCard'

import AlistarImg from '../assets/alistar.png'
import MaokaiImg from '../assets/maokai.png'
import baiano from '../assets/baiano.jpg'
import esa from '../assets/esa.jpg'
import mylon from '../assets/mylon.jpg'
import jime from '../assets/jime.jpg'
import brucer from '../assets/brucer.jpg'
import minerva from '../assets/minerva.jpg'
import crown from '../assets/crown.svg'

import { PlayerCard } from '@/components/PlayerCard'

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
  hidden: { opacity: 0 },
}

const MotionImage = motion(Image)

export default function Home() {
  return (
    <main
      className="
      relative 
      col-start-1 
      col-end-1 
      row-start-1 
      row-end-1 
      box-border 
      flex 
      h-full 
      w-full 
      flex-col 
      items-center 
      gap-12
      pb-24 
      md:col-start-2 
      md:col-end-2 
      md:row-start-1 
      md:row-end-1"
    >
      <Hero />

      <div className="flex h-fit w-full flex-col items-center gap-16 px-8 pb-12">
        <div className="flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-32 py-24 xl:flex-row xl:gap-6">
          <motion.div
            className="flex h-fit w-96 flex-col items-center gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            <span className="w-[26rem] text-center text-2xl font-extrabold text-slate-100 md:text-5xl">
              Comprometidos em salvar o cenário brasileiro de League of Legends
            </span>
          </motion.div>

          <motion.div
            className="relative flex w-full flex-1 justify-center px-6 lg:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
          >
            <MotionImage
              src={AlistarImg}
              alt="alistar art"
              width={1000}
              height={1000}
              className="mask absolute -bottom-16 left-0 z-20 w-96 drop-shadow-3xl"
              animate={{ x: 12, y: 12, rotate: 15 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 5,
              }}
            />
            <MotionImage
              src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/326397971_216763520764298_2047890939363868508_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=LZjWRR-CPoYAX8t82B-&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzAyMDA4ODU0ODE1NzM3NDc0MA%3D%3D.2-ccb7-5&oh=00_AfD-R8zVD7l2JDXQ4IDhyqK3QiHIzd6wYuoNS_4LAbNQRQ&oe=63E5EAE4&_nc_sid=30a2ef"
              alt="ilha das lendas membros de terno"
              width={1000}
              height={1000}
              className="object-fit z-1 relative max-w-lg border-[16px] border-violet-500 drop-shadow-3xl "
              animate={{
                boxShadow: [
                  `12px 12px 0px ${colors.lime[500]}`,
                  `30px 30px 0px ${colors.lime[500]}`,
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 4,
              }}
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-24">
        <motion.div
          className="relative flex h-fit w-full justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          <h1 className="relative text-5xl font-extrabold text-slate-100 xl:text-7xl">
            Cartinhas 👀
          </h1>
        </motion.div>

        <motion.div
          className="relative flex w-full flex-1 justify-center px-6 lg:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          <div className="grid h-full grid-cols-2 grid-rows-3 gap-8 lg:grid-cols-3 lg:grid-rows-3">
            <div className="relative col-span-2 row-start-2 row-end-2 flex items-center justify-center lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2 lg:h-full">
              <span className="w-[26rem] text-center text-2xl font-extrabold text-slate-100 md:text-5xl">
                Consulte as famosas cartinhas dos players do CBLOL
              </span>
              <motion.div
                className="absolute -right-[64px] top-0 h-[200px] w-[200px] rotate-[15deg]"
                initial={{ rotate: 25, y: 0 }}
                whileInView={{
                  rotate: 385,
                  y: [null, -150, 0],
                  transition: {
                    repeatDelay: 1,
                    rotate: {
                      delay: 0.4,
                      repeat: Infinity,
                      duration: 0.4,
                      repeatDelay: 2.8,
                      damping: 100,
                    },
                    y: {
                      repeat: Infinity,
                      repeatDelay: 2,
                      duration: 1.2,
                      ease: [0.785, 0.135, 0.15, 0.86],
                    },
                  },
                }}
              >
                <svg
                  id="publicdomainvectors.org"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 565.03 277.57"
                >
                  <path
                    className="fill-[#825400] [fill-rule:evenodd]"
                    d="M231,23.06a116.54,116.54,0,0,1,11.44-11.44,355.3,355.3,0,0,1,86.83,0A109.36,109.36,0,0,1,340.57,23c8,.65,13.38,1.47,14.71,2.46,25.25,18.85,41.63,40.92,36,68.25,18.39,1,39.47,2.33,59.22,4.08,9.76-25.7,38.65-81.46,46.44-83.26C498,14.29,562,15,566.7,21.28c8,10.66-14.74,85.51-30.44,133.64,16.16,17.72,16.76,48.64-5.57,64-.34,14.3-1.43,27.29-3.43,37.26-2.26,11.27-45.05,14.79-57,16.7-123,19.66-285.44,18.7-407.48-7.14-24.3-5.14-19.49-7-21.31-40-.09-1.7-.15-4.32-.17-7.65-20.56-15.29-20.21-44.33-5.43-61.88C20.15,108.12-3.11,32,5,21.28c4.71-6.24,68.72-7,69.79-6.75,8.25,1.91,42.33,58.54,51.59,82.91,18.57-1.65,37.72-2.89,54.94-3.78-2.88-26.3,12.38-48.94,34.87-67.81C217.57,24.69,223,23.77,231,23.06Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#fb0] [fill-rule:evenodd]"
                    d="M528.61,148.36q-.68-.45-1.38-.87A276.4,276.4,0,0,0,521.08,112c-1.5-5.78-28.87-10.18-61.9-13.38C488.37,54.53,475.46,74.47,503,30.92l47.12,2.85C532,115.61,534.62,96.6,528.61,148.36Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#fc0] [fill-rule:evenodd]"
                    d="M363.82,92.4a355,355,0,0,0-34.55-58.63,475.17,475.17,0,0,0-86.83,0c-11.13,17.89-22.88,38-34.06,58.68,4.44-.16,8.55-.29,12.25-.4C163.41,97.11,115.79,103.6,60.25,116.9c-1.1,9-2,17.61-2.65,25.87a43.62,43.62,0,0,1,9.47-1.14c14.44-.16,17.55,43.06,16.09,54.41-1.55,12.09-3.92,17.25-9.07,27.43a6.82,6.82,0,0,1-8,4,54,54,0,0,1-8.23-1.64h0c.59,7.26,1.31,14.73,2.17,22.56,136.83,29.21,314.87,29.21,451.71,0,.82-7.62,1.51-15,2.08-22.16-2.12.51-4.32.93-6.65,1.25a6.81,6.81,0,0,1-8-4c-5.15-10.18-7.52-15.34-9.08-27.43-1.45-11.35,1.65-54.57,16.1-54.41a44.74,44.74,0,0,1,7.63.76c-.67-8.15-1.52-16.53-2.58-25.27-58.72-14-108.69-20.55-169.22-25.48,3.4.07,11.24.32,21.83.76ZM220,169.43c21.37-17.68,10.77-8.43,31.87-27.92,6.51-6.76,29.31-35,34.21-35.24,5.2-.27,28.06,28.36,34.29,34.81,6.63,6.11,35.18,27.74,34.82,34.33-.27,5-28.55,27.87-35.22,34.26-6.41,6.66-29.27,34.92-34.2,35.2-7.85.46-18.9-18-19.39-18.59l-15-16.22a340.65,340.65,0,0,0-31.85-28c-4.32-3.14-3.62-9.49.47-12.62ZM86.66,128c58.27-17,97-20.26,157.31-15.36-53.43,4.18-104,8.71-157.31,15.36Zm396.21.66C429.61,122,379,117.45,325.56,113.27c60.31-4.9,99.05-1.61,157.31,15.36Zm0,105.73c-58.26,17-97,20.26-157.31,15.36C379,245.54,429.61,241,482.87,234.36Zm-396.21,0C139.92,241,190.54,245.54,244,249.72,183.67,254.62,144.93,251.32,86.66,234.36Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#ffdd30] [fill-rule:evenodd]"
                    d="M350.94,67.43a344.86,344.86,0,0,0-21.67-33.66,475.17,475.17,0,0,0-86.83,0c-11.13,17.89-22.88,38-34.06,58.68,4.44-.16,8.55-.29,12.25-.4C163.41,97.11,115.79,103.6,60.25,116.9c-1.1,9-2,17.61-2.65,25.87a43.62,43.62,0,0,1,9.47-1.14C78.6,141.51,82.9,169,83.43,185.9l1.29-1.68c14.82-19.36,20.2-27.73,45.12-33,8-1.79,15.87-3.67,23.71-6.18,26.7-8.53,24.45-16.6,55.3-19.25,29.12-2.51,61.45.83,66.88-34.11,3-19.35,6.67-35.79,30.71-34.42,12.48.71,29,6,44.5,10.13ZM86.66,128c58.27-17,97-20.26,157.31-15.36C190.54,116.79,139.92,121.32,86.66,128Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#fb0] [fill-rule:evenodd]"
                    d="M44.43,148.49c2.07-21.37,5.33-39.05,10.24-40.43,13.86-3.89,34.92-7,58-9.31C83.31,54.48,96.28,74.52,68.68,30.92L21.56,33.77c18.27,82.36,15.5,62.58,21.65,115.56C43.63,149.07,44,148.76,44.43,148.49Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#db0058] [fill-rule:evenodd]"
                    d="M236.89,175c19.73,16,32.6,29.82,49.17,49.52a337,337,0,0,1,48.77-48.76c-19.61-16.47-33.47-29.31-49.33-48.93C269.88,146.2,256.23,158.82,236.89,175Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#f06] [fill-rule:evenodd]"
                    d="M270.6,206.81c5,5.47,10,11.29,15.46,17.75a337,337,0,0,1,48.77-48.76c-6.13-5.15-11.7-9.94-16.94-14.7h-.18c-26,0-47.14,19.86-47.14,44.36Q270.57,206.14,270.6,206.81Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#ffdd30] [fill-rule:evenodd]"
                    d="M63.84,213.44c8.88-19.69,8.79-37.92-.42-57.49-33.26,7.38-33,50.56.42,57.49Zm445.54,0c-8.87-19.69-8.78-37.92.43-57.49C543.07,163.33,542.83,206.51,509.38,213.44Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#e39400] [fill-rule:evenodd]"
                    d="M357.56,49.14c6.3,12.93,10.9,27.51,14,43.6h0l10.22.48C380.89,67.91,373.22,60.26,357.56,49.14Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#e39400] [fill-rule:evenodd]"
                    d="M200,92.78a159.45,159.45,0,0,1,12.48-41c-14,11.07-23.37,20.72-26.44,41.66C190.86,93.18,195.53,93,200,92.78Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#f2b100] [fill-rule:evenodd]"
                    d="M59.82,246.73,60,248.4c136.83,29.21,314.87,29.21,451.71,0,.82-7.62,1.51-15,2.08-22.16-2.12.51-4.32.93-6.65,1.25a6.81,6.81,0,0,1-8-4c-5.15-10.18-7.52-15.34-9.08-27.43-.6-4.73-.42-15,1.05-25.36C441,221.94,324,257.9,187.68,257.9A714.93,714.93,0,0,1,59.82,246.73ZM511.2,142c.88.11,1.74.25,2.59.41-.16-1.87-.32-3.74-.49-5.63-.62,1.75-1.33,3.49-2.1,5.22Zm-28.33,92.38c-58.26,17-97,20.26-157.31,15.36C379,245.54,429.61,241,482.87,234.36Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#ff96b0] [fill-rule:evenodd]"
                    d="M263.6,176.8a161.25,161.25,0,0,1,21.06,21.3l1.67,20.34-.13-.93,3-21.76A163.73,163.73,0,0,1,307,178.11l22.48-2.31-20.74-1a163.34,163.34,0,0,1-20.52-20L284.87,134l-.66,19.62a149.74,149.74,0,0,1-18.89,18.88L244,174.87l1.32-.13Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <path
                    className="fill-[#ff7a9b] [fill-rule:evenodd]"
                    d="M274.78,187.12c3.29,3.37,6.44,6.93,9.88,11l1.67,20.34-.13-.93,3-21.76A163.73,163.73,0,0,1,307,178.11l22.48-2.31-20.74-1c-4-3.38-7.5-6.46-10.82-9.66A46,46,0,0,0,274.78,187.12Z"
                    transform="translate(-3.34 -8.96)"
                  />
                  <ellipse
                    className="fill-[#cfe35d] [fill-rule:evenodd]"
                    cx="45.77"
                    cy="172.4"
                    rx="9.05"
                    ry="14.82"
                  />
                  <path
                    className="fill-[#cfe35d] [fill-rule:evenodd]"
                    d="M521.9,195.92c5,0,9.05-6.66,9.05-14.82s-4.06-14.82-9.05-14.82-9,6.66-9,14.82S516.92,195.92,521.9,195.92Z"
                    transform="translate(-3.34 -8.96)"
                  />
                </svg>
              </motion.div>
            </div>
            <div
              key={mockedPlayers[0].player.id}
              className="flex h-full items-center justify-center lg:col-start-1 lg:col-end-1 lg:row-span-3"
            >
              <PlayerCard
                player={mockedPlayers[0].player}
                teamColor={mockedPlayers[0].teamColor as COLORS}
                teamLogo={mockedPlayers[0].teamLogo}
                isSelected={false}
                setPlayerSelection={() => {}}
              />
            </div>
            <div
              key={mockedPlayers[1].player.id}
              className="flex h-full items-center justify-center lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1"
            >
              <PlayerCard
                player={mockedPlayers[1].player}
                teamColor={mockedPlayers[1].teamColor as COLORS}
                teamLogo={mockedPlayers[1].teamLogo}
                isSelected={false}
                setPlayerSelection={() => {}}
              />
            </div>
            <div
              key={mockedPlayers[2].player.id}
              className="flex h-full items-center justify-center lg:col-start-2 lg:col-end-2 lg:row-start-3 lg:row-end-3"
            >
              <PlayerCard
                player={mockedPlayers[2].player}
                teamColor={mockedPlayers[2].teamColor as COLORS}
                teamLogo={mockedPlayers[2].teamLogo}
                isSelected={false}
                setPlayerSelection={() => {}}
              />
            </div>
            <div
              key={mockedPlayers[3].player.id}
              className="flex h-full items-center justify-center lg:col-start-3 lg:col-end-3 lg:row-span-3"
            >
              <PlayerCard
                player={mockedPlayers[3].player}
                teamColor={mockedPlayers[3].teamColor as COLORS}
                teamLogo={mockedPlayers[3].teamLogo}
                isSelected={false}
                setPlayerSelection={() => {}}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="my-16 flex h-fit w-full flex-col items-center gap-24 px-8 md:my-32">
        <motion.div
          className="relative flex h-fit w-fit "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          <MotionImage
            src={MaokaiImg}
            alt="maokai art"
            width={1000}
            height={1000}
            className="mask absolute -top-36 -right-40 z-20 w-64 drop-shadow-3xl xl:-right-64"
            animate={{ scale: 0.95 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 4,
              delay: 0.5,
            }}
          />
          <h1 className="relative text-5xl font-extrabold text-slate-100 xl:text-7xl">
            Membros
          </h1>
        </motion.div>

        <motion.div className="flex w-full max-w-7xl flex-wrap items-center justify-center gap-6">
          <MotionMemberCard
            variant="primary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
            name="Baiano"
            path={baiano}
            socialMedia={{
              instagram: '@baianolol',
              twitch: 'baiano',
              twitter: '@baianolol1',
            }}
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            rotScale={0.8}
          />
          <MotionMemberCard
            variant="secondary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
            name="Esa"
            path={esa}
            socialMedia={{
              instagram: '@esacarry',
              twitch: 'esacarry',
              twitter: '@esACarry',
            }}
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            rotScale={-0.8}
          />
          <MotionMemberCard
            variant="tertiary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
            name="Minerva"
            path={minerva}
            socialMedia={{
              instagram: '@gustavominerva',
              twitch: 'minerva',
              twitter: '@GustavoMinerva',
            }}
            custom={3}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            rotScale={0.5}
          />
          <MotionMemberCard
            variant="primary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
            name="Mylon"
            path={mylon}
            socialMedia={{
              instagram: '@mylonzete',
              twitch: 'mylonzete',
              twitter: '@mylonzete',
            }}
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            rotScale={-0.6}
          />
          <MotionMemberCard
            variant="tertiary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
            name="Brucer"
            path={brucer}
            socialMedia={{
              instagram: '@brucerlol',
              twitch: 'brucerlol',
              twitter: '@brucerlol',
            }}
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            rotScale={-0.8}
          />
          <MotionMemberCard
            variant="secondary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
            name="Jime"
            path={jime}
            socialMedia={{
              instagram: '@jimelol1',
              twitch: 'jimelol1',
              twitter: '@jimelol1',
            }}
            custom={3}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            rotScale={0.1}
          />
        </motion.div>
      </div>
    </main>
  )
}

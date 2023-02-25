'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Hero } from '@/components/Hero'
import { MotionMemberCard } from '@/components/MemberCard'
import AlistarImg from '../assets/alistar.png'
import MaokaiImg from '../assets/maokai.png'
import baiano from '../assets/baiano.jpg'
import esa from '../assets/esa.jpg'
import mylon from '../assets/mylon.jpg'
import jime from '../assets/jime.jpg'
import brucer from '../assets/brucer.jpg'
import minerva from '../assets/minerva.jpg'
import colors from 'tailwindcss/colors'

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
  hidden: { opacity: 0 },
}

const MotionImage = motion(Image, { forwardMotionProps: true })

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
            <span className="w-[26rem] text-center text-3xl font-extrabold text-slate-100 md:text-5xl">
              Comprometidos em salvar o cenário brasileiro de League of Legends
            </span>
          </motion.div>

          <motion.div
            className="relative flex w-full flex-1 justify-center"
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

      <div className="my-16 flex h-fit w-full flex-col items-center gap-24 px-12 md:my-32">
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

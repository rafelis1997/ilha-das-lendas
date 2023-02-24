'use client'
import Image from 'next/image'
import { UserSquare } from 'phosphor-react'

import { Hero } from '@/components/Hero'
import { MemberCard } from '@/components/MemberCard'
import AlistarImg from '../assets/alistar.png'
import MaokaiImg from '../assets/maokai.png'

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
      gap-32 
      pb-24 
      md:col-start-2 
      md:col-end-2 
      md:row-start-1 
      md:row-end-1"
    >
      <Hero />
      <div className="flex h-fit w-full flex-col items-center gap-16 px-8 pb-12">
        <div className="flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-32 py-24 xl:flex-row xl:gap-6">
          <div className="flex h-fit w-96 flex-col items-center gap-16">
            <span className="w-[26rem] text-center text-3xl font-extrabold text-slate-100 md:text-5xl">
              Comprometidos em salvar o cenário brasileiro de League of Legends
            </span>
          </div>
          <div className="relative flex w-full flex-1 justify-center">
            <Image
              src={AlistarImg}
              alt="alistar art"
              width={1000}
              height={1000}
              className="mask absolute -bottom-16 left-0 z-20 w-96"
            />
            <Image
              src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/326397971_216763520764298_2047890939363868508_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=LZjWRR-CPoYAX8t82B-&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzAyMDA4ODU0ODE1NzM3NDc0MA%3D%3D.2-ccb7-5&oh=00_AfD-R8zVD7l2JDXQ4IDhyqK3QiHIzd6wYuoNS_4LAbNQRQ&oe=63E5EAE4&_nc_sid=30a2ef"
              alt="ilha das lendas membros de terno"
              width={1000}
              height={1000}
              className="object-fit z-1 relative max-w-lg border-[16px] border-violet-500 shadow-[12px_12px_0px_theme(colors.lime.500)] drop-shadow-xl "
            />
          </div>
        </div>
      </div>

      <div className="my-16 flex h-fit w-full flex-col items-center gap-24 px-12 md:my-32">
        <div className="relative flex h-fit w-fit ">
          <Image
            src={MaokaiImg}
            alt="alistar art"
            width={1000}
            height={1000}
            className="mask absolute -top-36 -right-40 z-20 w-64 xl:-right-64"
          />
          <h1 className="relative text-5xl font-extrabold text-slate-100 xl:text-7xl">
            Membros
          </h1>
        </div>
        <div className="flex w-full max-w-7xl flex-wrap items-center justify-center gap-6">
          <MemberCard
            variant="primary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
          >
            <UserSquare size={200} color="white" />
            <span
              className={`mb-8 text-center text-3xl font-semibold text-slate-100`}
            >
              Baiano
            </span>
          </MemberCard>
          <MemberCard
            variant="secondary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
          >
            <UserSquare size={200} color="white" />
            <span
              className={`mb-8 text-center text-3xl font-semibold text-slate-100`}
            >
              Mylon
            </span>
          </MemberCard>
          <MemberCard
            variant="tertiary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
          >
            <UserSquare size={200} color="white" />
            <span
              className={`mb-8 text-center text-3xl font-semibold text-slate-100`}
            >
              Esa
            </span>
          </MemberCard>
          <MemberCard
            variant="primary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
          >
            <UserSquare size={200} color="white" />
            <span
              className={`mb-8 text-center text-3xl font-semibold text-slate-100`}
            >
              Brucer
            </span>
          </MemberCard>
          <MemberCard
            variant="tertiary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
          >
            <UserSquare size={200} color="white" />
            <span
              className={`mb-8 text-center text-3xl font-semibold text-slate-100`}
            >
              Minerva
            </span>
          </MemberCard>
          <MemberCard
            variant="secondary"
            className="flex h-fit w-96 flex-col items-center gap-5 p-8"
          >
            <UserSquare size={200} color="white" />
            <span
              className={`mb-8 text-center text-3xl font-semibold text-slate-100`}
            >
              Jimi
            </span>
          </MemberCard>
        </div>
      </div>
    </main>
  )
}

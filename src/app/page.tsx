'use client'
import { Hero } from '@/components/Hero'
import { Unbounded } from '@next/font/google'
import Image from 'next/image'
import { UserSquare } from 'phosphor-react'

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
      gap-16 
      pb-24 
      md:col-start-2 
      md:col-end-2 
      md:row-start-1 
      md:row-end-1"
    >
      <Hero />
      <div className="flex h-fit w-full flex-col items-center gap-16 px-8 pb-12">
        <div className="flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-6 md:flex-row">
          <div className="flex h-fit w-96 flex-col items-center gap-16">
            <span className="w-[26rem] text-center text-3xl font-extrabold text-purple-900 md:text-5xl">
              Comprometidos em salvar o cenário brasileiro de League of Legends
            </span>
          </div>
          <Image
            src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/326397971_216763520764298_2047890939363868508_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=LZjWRR-CPoYAX8t82B-&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzAyMDA4ODU0ODE1NzM3NDc0MA%3D%3D.2-ccb7-5&oh=00_AfD-R8zVD7l2JDXQ4IDhyqK3QiHIzd6wYuoNS_4LAbNQRQ&oe=63E5EAE4&_nc_sid=30a2ef"
            alt="braum art"
            width={1000}
            height={1000}
            className="flex-2 w-full max-w-lg rounded-3xl"
          />
        </div>
      </div>

      <div className="flex h-fit w-full flex-col items-center gap-16 px-12">
        <h1 className="text-5xl font-extrabold text-slate-900">Membros</h1>
        <div className="flex w-full max-w-7xl flex-wrap items-center justify-center gap-6">
          <div className="flex h-fit flex-col items-center gap-5 rounded-3xl bg-slate-300 p-8">
            <UserSquare size={200} color="gray" />
            <span className="text-center text-3xl font-semibold text-slate-700">
              Nome
            </span>
          </div>
          <div className="flex h-fit flex-col items-center gap-5 rounded-3xl bg-slate-300 p-8">
            <UserSquare size={200} color="gray" />
            <span className="text-center text-3xl font-semibold text-slate-700">
              Nome
            </span>
          </div>
          <div className="flex h-fit flex-col items-center gap-5 rounded-3xl bg-slate-300 p-8">
            <UserSquare size={200} color="gray" />
            <span className="text-center text-3xl font-semibold text-slate-700">
              Nome
            </span>
          </div>
          <div className="flex h-fit flex-col items-center gap-5 rounded-3xl bg-slate-300 p-8">
            <UserSquare size={200} color="gray" />
            <span className="text-center text-3xl font-semibold text-slate-700">
              Nome
            </span>
          </div>
          <div className="flex h-fit flex-col items-center gap-5 rounded-3xl bg-slate-300 p-8">
            <UserSquare size={200} color="gray" />
            <span className="text-center text-3xl font-semibold text-slate-700">
              Nome
            </span>
          </div>
          <div className="flex h-fit flex-col items-center gap-5 rounded-3xl bg-slate-300 p-8">
            <UserSquare size={200} color="gray" />
            <span className="text-center text-3xl font-semibold text-slate-700">
              Nome
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

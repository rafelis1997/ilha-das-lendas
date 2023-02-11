'use client';
import Image from 'next/image';
import { Placeholder, UserSquare } from "phosphor-react";


import HeroImage from '../assets/hero-img.jpg';

export default function Home() {
  return (
    <main className="w-full gap-16 h-full flex flex-col items-center pb-24 col-start-1 col-end-1 row-start-1 row-end-1 md:row-start-1 md:row-end-1 md:col-start-2 md:col-end-2 box-border relative">
      <div className="w-full h-screen px-12 md:px-36 flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:justify-between md:items-center relative bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400 to-slate-100">
        <div className="flex flex-col gap-6 items-center">
          <div className='flex flex-col gap-6 text-center bg-clip-text bg-gradient-to-b from-purple-800 to-blue-800'>
            <h1 className='text-5xl md:text-7xl font-extrabold text-transparent'>SÓ AGRADECE!</h1>
            <h1 className='text-5xl md:text-7xl font-extrabold'>🙏</h1>
          </div>
          <span className='text-3xl md:text-5xl font-extrabold text-slate-100 text-center w-[26rem] bg-gradient-to-b from-purple-800 to-blue-800 bg-clip-text'>
              Aqui apenas a 
              <span className='text-3xl md:text-5xl font-extrabold text-transparent text-center'>{' "true" da "true"'}</span>
               é falada, nada além disso! 
          </span>
        </div>
        <div className='w-full h-full max-w-[600px] max-h-[350px] md:max-w-[800px] md:max-h-[500px] rounded-3xl overflow-hidden'>
          <Image 
            src={HeroImage} 
            alt="as lendas do ilha das lendas" 
            width={1000} 
            height={1000}
            className="object-[100%_0%] object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="w-full gap-16 h-fit flex flex-col items-center px-8 pb-12">
        <div className="w-full flex flex-col-reverse gap-6 md:flex-row justify-between items-center max-w-7xl">
          <div className="gap-16 h-fit flex flex-col items-center w-96">   
            <span className='text-3xl md:text-5xl font-extrabold text-purple-900 text-center w-[26rem]'>
              Comprometidos em salvar o cenário brasileiro de League of Legends
            </span>
          </div>
          <Image 
            src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/326397971_216763520764298_2047890939363868508_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=LZjWRR-CPoYAX8t82B-&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzAyMDA4ODU0ODE1NzM3NDc0MA%3D%3D.2-ccb7-5&oh=00_AfD-R8zVD7l2JDXQ4IDhyqK3QiHIzd6wYuoNS_4LAbNQRQ&oe=63E5EAE4&_nc_sid=30a2ef" 
            alt="braum art" 
            width={1000}
            height={1000}
            className="flex-2 max-w-lg w-full rounded-3xl"
          />
        </div>
      </div>

      <div className="w-full gap-16 h-fit flex flex-col items-center px-12">
        <h1 className='text-5xl font-extrabold text-slate-900'>Membros</h1>
        <div className="w-full flex flex-wrap justify-center items-center max-w-7xl gap-6">
          <div className="rounded-3xl gap-5 h-fit flex flex-col items-center p-8 bg-slate-300">
            <UserSquare size={200} color="gray"/>
            <span className='text-3xl font-semibold text-slate-700 text-center'>
              Nome
            </span>
          </div>
          <div className="rounded-3xl gap-5 h-fit flex flex-col items-center p-8 bg-slate-300">
            <UserSquare size={200} color="gray"/>
            <span className='text-3xl font-semibold text-slate-700 text-center'>
              Nome
            </span>
          </div>
          <div className="rounded-3xl gap-5 h-fit flex flex-col items-center p-8 bg-slate-300">
            <UserSquare size={200} color="gray"/>
            <span className='text-3xl font-semibold text-slate-700 text-center'>
              Nome
            </span>
          </div>
          <div className="rounded-3xl gap-5 h-fit flex flex-col items-center p-8 bg-slate-300">
            <UserSquare size={200} color="gray"/>
            <span className='text-3xl font-semibold text-slate-700 text-center'>
              Nome
            </span>
          </div>
          <div className="rounded-3xl gap-5 h-fit flex flex-col items-center p-8 bg-slate-300">
            <UserSquare size={200} color="gray"/>
            <span className='text-3xl font-semibold text-slate-700 text-center'>
              Nome
            </span>
          </div>
          <div className="rounded-3xl gap-5 h-fit flex flex-col items-center p-8 bg-slate-300">
            <UserSquare size={200} color="gray"/>
            <span className='text-3xl font-semibold text-slate-700 text-center'>
              Nome
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
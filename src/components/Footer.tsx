'use client';

import { InstagramLogo, TwitchLogo, TwitterLogo } from "phosphor-react";

export function Footer() {
  return (
    <div className="w-full flex justify-center flex-col gap-6 bg-purple-900 col-start-1 col-end-1 md:col-start-2 md:col-end-2 py-8">
      <h1 className="font-bold text-slate-200 text-center text-2xl">Redes sociais</h1>
      <div className="w-full flex justify-center gap-6">
        <TwitchLogo size={30} weight="duotone" color="white"/>
        <TwitterLogo size={30} weight="duotone" color="white"/>
        <InstagramLogo size={30} weight="duotone" color="white"/>
      </div>

      <span className="text-center text-slate-200">&copy; Todos os direitos reservados a {'"Baiano"'}</span>
    </div>
  )
}
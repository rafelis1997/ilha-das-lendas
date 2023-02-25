'use client'

import { InstagramLogo, TwitchLogo, TwitterLogo } from 'phosphor-react'

export function Footer() {
  return (
    <div className="col-start-1 col-end-1 flex w-full flex-col justify-center gap-6 bg-lime-500 py-8 md:col-start-2 md:col-end-2">
      <h1 className="text-center text-2xl font-bold text-purple-900">
        Redes sociais
      </h1>
      <div className="flex w-full justify-center gap-6 text-purple-900">
        <TwitchLogo size={30} weight="duotone" />
        <TwitterLogo size={30} weight="duotone" />
        <InstagramLogo size={30} weight="duotone" />
      </div>

      <span className="text-center text-purple-900">
        &copy; Todos os direitos reservados a {'"Baiano"'}
      </span>
    </div>
  )
}

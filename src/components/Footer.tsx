"use client";

import { InstagramLogo, TwitchLogo, TwitterLogo } from "phosphor-react";

export function Footer() {
  return (
    <div className="col-start-1 col-end-1 flex w-full flex-col justify-center gap-6 bg-purple-900 py-8 md:col-start-2 md:col-end-2">
      <h1 className="text-center text-2xl font-bold text-slate-200">
        Redes sociais
      </h1>
      <div className="flex w-full justify-center gap-6">
        <TwitchLogo size={30} weight="duotone" color="white" />
        <TwitterLogo size={30} weight="duotone" color="white" />
        <InstagramLogo size={30} weight="duotone" color="white" />
      </div>

      <span className="text-center text-slate-200">
        &copy; Todos os direitos reservados a {'"Baiano"'}
      </span>
    </div>
  );
}

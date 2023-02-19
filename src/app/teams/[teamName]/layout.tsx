{
  /* @ts-expect-error Server Component */
}

import { Suspense } from 'react'
import TeamsNavMenu from './TeamsNavMenu'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`flex h-full min-h-screen flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 to-slate-200 `}
    >
      <Suspense>
        <TeamsNavMenu />
      </Suspense>
      {children}
    </div>
  )
}

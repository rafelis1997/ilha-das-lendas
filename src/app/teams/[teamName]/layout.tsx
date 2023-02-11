{/* @ts-expect-error Server Component */}


import { Suspense } from "react"
import TeamsNavMenu from "./TeamsNavMenu"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <div className={`flex flex-col h-full min-h-screen`}>
      <Suspense>
        <TeamsNavMenu />
      </Suspense>
      {children}
    </div>
  )
}

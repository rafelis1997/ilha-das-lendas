{
  /* @ts-expect-error Server Component */
}

import { Suspense } from "react";
import TeamsNavMenu from "./TeamsNavMenu";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex h-full min-h-screen flex-col`}>
      <Suspense>
        <TeamsNavMenu />
      </Suspense>
      {children}
    </div>
  );
}

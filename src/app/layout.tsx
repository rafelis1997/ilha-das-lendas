import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import './globals.css'
import ReactQueryWrapper from './reactQueryWrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className="max-w-screen h-fit min-h-[100vh] w-full bg-violet-900 "
    >
      <head />
      <body className="grid min-h-[100vh] grid-cols-1 grid-rows-[1fr_88px] bg-gradient-to-b from-violet-800 to-violet-900 antialiased md:grid-cols-[88px_minmax(200px,_1fr)] md:grid-rows-1">
        <Header />
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
        <Footer />
      </body>
    </html>
  )
}

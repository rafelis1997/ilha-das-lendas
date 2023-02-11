import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Inter, Unbounded } from '@next/font/google'
import './globals.css'
import ReactQueryWrapper from './reactQueryWrapper'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-BR" className='h-fit max-w-screen w-full min-h-[100vh] bg-gray-100 antialiased'>
        {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <body className='grid grid-rows-[1fr_88px] grid-cols-1 md:grid-rows-1 md:grid-cols-[88px_minmax(200px,_1fr)] min-h-[100vh] bg-gray-100'>
          <Header />
          <ReactQueryWrapper>
            {children}
          </ReactQueryWrapper>
          <Footer /> 
        </body>
      </html>
  )
}

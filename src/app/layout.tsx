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
    <html
      lang="pt-BR"
      className="max-w-screen h-fit min-h-[100vh] w-full bg-gray-100 antialiased"
    >
      <head />
      <body className="grid min-h-[100vh] grid-cols-1 grid-rows-[1fr_88px] bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-purple-400 to-purple-600 md:grid-cols-[88px_minmax(200px,_1fr)] md:grid-rows-1">
        <Header />
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
        <Footer />
      </body>
    </html>
  )
}

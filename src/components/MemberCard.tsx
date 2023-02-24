import { HTMLAttributes, ReactNode } from 'react'
import { Unbounded } from '@next/font/google'

const unbounded = Unbounded({
  preload: true,
  variable: '--font-unbounded',
  subsets: ['latin'],
})

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant: 'primary' | 'secondary' | 'tertiary'
  children: ReactNode
}

export function MemberCard({ variant, children, className, ...rest }: Props) {
  if (variant === 'primary') {
    return (
      <div
        className={`${className} ${unbounded.className} bg-[url(../assets/artboard_1.svg)] bg-bottom bg-no-repeat object-contain drop-shadow-xl filter`}
        {...rest}
      >
        {children}
      </div>
    )
  }
  if (variant === 'secondary') {
    return (
      <div
        className={`${className} ${unbounded.className} bg-[url(../assets/artboard_2.svg)] bg-bottom bg-no-repeat object-contain drop-shadow-2xl filter`}
        {...rest}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      className={`${className} ${unbounded.className} bg-[url(../assets/artboard_3.svg)] bg-bottom bg-no-repeat object-contain drop-shadow-2xl filter`}
      {...rest}
    >
      {children}
    </div>
  )
}

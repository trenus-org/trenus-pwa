// app/fonts.ts
import { Rubik, Exo } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-exo',
})

export const fonts = {
  rubik,
  exo
}

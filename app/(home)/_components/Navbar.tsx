import { cn } from '@/lib/utils'
import React from 'react'
import Socials from './Socials'

export default function Navbar() {
  return (
    <nav className={cn("py-10 flex justify-between items-center text-slate-50 animate-move-down")}>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Alexandra M. 👧🏻</h1>
     <Socials/>
   </nav>
  )
}


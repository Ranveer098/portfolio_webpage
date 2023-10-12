import React from 'react'
import { headers } from '../../next.config'
import Link from 'next/link'
import Logo from './Logo'

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex item-center justify-between'>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/Projects'>Projects</Link>
        <Link href='/articles'>Articles</Link>


      </nav>
      
      <nav>

      <Link href="/" target='_blank' >Twitter</Link>
      <Link href="/" target='_blank' >Github</Link>
      <Link href="/" target='_blank' >Linkedin</Link>
      <Link href="/" target='_blank' >t</Link>
      <Link href="/" target='_blank' >t</Link>
      <Link href="/" target='_blank' >t</Link>
      </nav>
      <div className='absolute left-[50%] top-2 transalte-x-[-50]'> <Logo /> </div>
      




    </header>
  )
}

export default NavBar

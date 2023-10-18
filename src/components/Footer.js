import Link from 'next/link'
import React from 'react'
import Layout from './Layout'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark'>
      <Layout className='py-8 items-center justify-between'>
        <span>{new Date().getFullYear()}&copy;All Right Reserved.</span>
    
        <Link href="/" target={'_blank'} className='underline underline-offset-2'>Say Hello</Link>
      

      </Layout>

    </footer>
  )
}

export default Footer

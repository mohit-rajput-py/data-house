import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary text-background py-4'>
      <p className='text-sm text-muted flex gap-1 justify-center'>
        Bulit 
         With 
        <Image src="/white_heart.png" alt="heart" width={22} height={18} className='inline-block 1' />
         Using
        <a href="https://nextjs.org" target='_blank'>
        <Image src="/next.svg" alt="Next.js logo" width={46} height={28} className='inline-block ml-1' />
        </a>
       
      </p>
    </div>
  )
}

export default Footer

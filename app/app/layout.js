import Footer from '@/components/Footer'
import HeaderApp from '@/components/HeaderApp'
import React from 'react'

const layout = ( { children } ) => {
  return (
    <div className="flex flex-col min-h-svh">
        <HeaderApp />
        <main className='flex grow max-w-[1200px] mx-auto px-8 w-full'> { children }</main>
        <Footer />
    </div>
  )
}

export default layout
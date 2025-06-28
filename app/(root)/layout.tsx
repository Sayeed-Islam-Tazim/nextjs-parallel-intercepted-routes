import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex min-h-screen items-center justify-between flex-col'>
        <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
    </div>
  )
}

export default layout

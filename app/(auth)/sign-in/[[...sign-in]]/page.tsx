import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className=' glassmorphism-auth h-screen w-full'>
      <div className='ml-auto mr-auto max-w-fit mt-auto mb-auto max-h-fit' >
        <SignIn />
        </div>
    </div>
  )
}

export default page
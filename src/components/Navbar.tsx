import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='z-50 py-4 absolute top-0 w-full bg-primary bg-opacity-50 items-center  flex justify-between'>
    <nav className='container items-center  flex justify-between'>
      <h1 className='text-2xl font-bold'>ReelScout</h1>
      <ul className='flex items-center gap-4'>
        <li>Beranda</li>
        <li>Film</li>
        <li>TV Series</li>
      </ul>
      <div className='flex gap-2 items-center'>
        
      <Button variant='secondary'>Login</Button>
      </div>
    </nav>
    </nav>
  )
}

export default Navbar

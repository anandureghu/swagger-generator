import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='mb-7'>
      <Link to='/' 
        className='text-lg font-bold uppercase border-b-2 border-b-green-500 max-w-fit'
      >
        Swagger Generator
      </Link>
    </div>
  )
}

export default Navbar
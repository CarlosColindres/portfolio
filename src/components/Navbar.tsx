import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { push } = useHistory()
  const navigate = (path: string) => {
    setNav(false)
    push(path)
  }
  return (
    <header className='px-4 flex justify-between items-center'>
      <div className='w-16 lg:w-20 cursor-pointer' onClick={() => push('/')}>
        <img
          className='w-full'
          src='https://i.ibb.co/5YjYBKY/logo.png'
          alt='Carlos Colindres logo'
        />
      </div>
      <div
        className='lg:hidden cursor-pointer text-2xl'
        onClick={() => setNav(true)}>
        <i className='fas fa-bars dark:text-darkGreen'></i>
      </div>
      <nav className='hidden lg:block text-darkGreen text-lg '>
        <Link to='/' className='ml-8 hover:text-lightGreen'>
          Home
        </Link>
        <Link to='/projects' className='ml-8 hover:text-lightGreen'>
          Projects
        </Link>
        {/* <Link to='/contact' className='ml-8 hover:text-lightGreen'>
          Contact
        </Link> */}
      </nav>
      {nav ? (
        <div
          className={
            'bg-darkGreen dark:bg-darkGray flex flex-col  h-screen w-full absolute top-0 left-0 z-20 lg:hidden'
          }>
          <div className='bg-bgColor dark:bg-darkGray flex justify-between items-center px-4'>
            <div
              className='w-16 lg:w-20 cursor-pointer'
              onClick={() => push('/')}>
              <img
                className='w-full'
                src='https://i.ibb.co/5YjYBKY/logo.png'
                alt='Carlos Colindres logo'
              />
            </div>
            <div
              className='lg:hidden cursor-pointer text-2xl'
              onClick={() => setNav(false)}>
              <i className='fas fa-times dark:text-darkGreen'></i>
            </div>
          </div>
          <nav className='flex flex-col px-4'>
            <div
              onClick={() => navigate('/')}
              className=' text-bgColor hover:text-lightGreen border-b-2 py-1 my-2 cursor-pointer'>
              Home
            </div>
            <div
              onClick={() => navigate('/projects')}
              className='text-bgColor hover:text-lightGreen border-b-2 py-1 my-2 cursor-pointer'>
              Projects
            </div>
            {/* <div
              onClick={() => navigate('/contact')}
              className='text-bgColor hover:text-lightGreen py-1 my-2 cursor-pointer'>
              Contact
            </div> */}
          </nav>
          <div className='flex px-4'>
            {/* <div className='w-10 h-10 bg-bgColor shadow-md flex justify-center items-center text-darkGreen hover:text-darkGray hover:bg-lightGreen cursor-pointer rounded-md'>
              <i className='fab fa-linkedin-in text-xl'></i>
            </div> */}
            <div className='w-10 h-10 bg-bgColor shadow-md flex justify-center items-center text-darkGreen hover:text-darkGray hover:bg-lightGreen cursor-pointer rounded-md'>
              <i className='fab fa-github-alt text-xl'></i>
            </div>
            {/* <div className='w-10 h-10 bg-bgColor shadow-md flex justify-center items-center text-darkGreen hover:text-darkGray hover:bg-lightGreen cursor-pointer ml-4 rounded-md text-xl'>
              <i className='fab fa-instagram'></i>
            </div> */}
           
          </div>
        </div>
      ) : (
        ''
      )}
    </header>
  )
}

export default Navbar

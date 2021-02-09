const Hero = () => {
    return (
      <div className=' px-4 h-5/6 lg:h-full flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='hidden lg:block  sm:text-5xl md:text-6xl xl:text-8xl basis-text dark:text-bgColor'>
          <h1>Hello,</h1>
          <h1>
            I'm <span className='text-darkGreen'>Carlos</span>,
          </h1>
          <h2 className='text-5xl'>Full Stack Developer.</h2>
          <div className='xl:-mt-6'>
            <a
              className='text-lg py-2 px-8 border-darkGreen text-darkGreen hover:text-lightGreen hover:border-lightGreen border-2 rounded-md'
              href='/Carlos_Colindres_Resume_15-01-2021-16-51-44 (2).pdf'
              download>
              Download Resume
            </a>
          </div>
        </div>
        <div className='lg:hidden  text-6xl md:text-6xl text-center dark:text-bgColor'>
          <h1>Hello,</h1>
          <h1>
            I'm <span className='text-darkGreen'>Carlos</span>.
          </h1>

          <div className='xl:-mt-6'>
            <a
              className='text-lg py-2 px-8 border-darkGreen text-darkGreen hover:text-lightGreen hover:border-lightGreen border-2 rounded-md'
              href='/Carlos_Colindres_Resume_15-01-2021-16-51-44 (2).pdf'
              download>
              Download Resume
            </a>
          </div>
        </div>
        <div className='basis-img'>
          <img
            className='w-full'
            src='/undraw_static_website_0107.svg'
            alt='coding'
          />
        </div>
        <div className='lg:hidden text-center'>
          <h2 className='text-3xl dark:text-bgColor'>Full Stack Developer.</h2>
        </div>
      </div>
    )
}

export default Hero

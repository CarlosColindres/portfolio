import React from 'react'
import { Switch, Route, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'

const App = () => {

  const { pathname } = useLocation()
  
  
  return (
    <div className='bg-bgColor dark:bg-darkGray'>
      <div
        className={
          pathname !== '/projects'
            ? 'max-w-screen-2xl mx-auto  h-screen relative'
            : 'max-w-screen-2xl mx-auto  h-full relative'
        }>
        <div className='h-10c'>
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/'>
            <div className='h-90c'>
              <Hero />
            </div>
            <div className='hidden absolute right-0 bottom-10 lg:flex '>
              {/* <div className='w-10 h-10 bg-white shadow-md flex justify-center items-center bg-bgColor text-darkGreen hover:text-darkGray hover:bg-lightGreen cursor-pointer rounded-md'>
               
                <i className='fab fa-linkedin-in text-xl'></i>
              </div> */}
              <div className='w-10 h-10 bg-white shadow-md flex justify-center items-center bg-bgColor text-darkGreen hover:text-darkGray hover:bg-lightGreen cursor-pointer ml-4 rounded-md'>
                <a
                  href='https://github.com/CarlosColindres?tab=repositories'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fab fa-github-alt text-xl'></i>
                </a>
              </div>
              {/* <div className='w-10 h-10 bg-white shadow-md flex justify-center items-center bg-bgColor text-darkGreen hover:text-darkGray hover:bg-lightGreen cursor-pointer ml-4 rounded-md text-xl'>
                <i className='fab fa-instagram'></i>
              </div> */}
            </div>
            {/* <nav className='absolute left-0 bottom-10 flex'>
              <Link
                to='/'
                className='w-3 h-3 rounded-full bg-darkGreen ml-8  hover:bg-lightGreen'></Link>
              <Link
                to='/projects'
                className='w-3 h-3 rounded-full bg-circleGreen ml-8 hover:bg-lightGreen'></Link>
              <Link
                to='/contact'
                className='w-3 h-3 rounded-full bg-circleGreen ml-8 hover:bg-lightGreen'></Link>
            </nav> */}
          </Route>
          <Route exact path='/projects'>
            <div className='h-full'>
              <Projects />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App

import React, { useEffect, useState} from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIssticky] = useState(false);
// set toggle menu
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
}

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setIssticky(true);
      }
      else {
        setIssticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  });
  // navitems array
  const navItems = [ 
    { link: "Home", path:"/home"},
    { link: "Service", path:"/service"},
    { link: "About", path:"/about"},
    { link: "Product", path:"/product"},
    { link: "Testimonial", path:"/testimonial"},
    { link: "Faq", path:"/faq"},
  ];




  
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
    <nav>
      <div>
        <a href="" className='text-2xl' font-semibold flex items-center space-x-3><img src={logo} alt="" className='logo'/><span className='text-[#263238]'>JAVSES</span></a>
        {/* nav items for large devices */}
        <ul className='md:flex space-x-12 hidden '>
          {
            // navItems.map(({links, index})=> (<links to={index} spy={true} smooth={true} offset=
            // {-100}   >{links.link}</links> ))
            navItems.map((links, index)=> (<links to={links.path} spy={true} smooth={true} offset=
              {-100}   >{links.link}</links>) )
          }

        </ul>
      </div>

      </nav>

    </header>
  )
}

export default Navbar
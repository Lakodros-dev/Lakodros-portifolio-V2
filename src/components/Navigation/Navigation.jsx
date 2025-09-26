import { useState, useEffect } from 'react'

const nameVariations = [
  { text: 'Lakodros', font: 'Orbitron', weight: '700' },
  { text: 'Lakodros', font: 'Poppins', weight: '700' },
  { text: 'Lakodros', font: 'Rajdhani', weight: '700' },
  { text: 'Lakodros', font: 'Russo One', weight: '400' },
  { text: 'Lakodros', font: 'Play', weight: '700' },
]

const Navigation = ({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false)
  const [nameIndex, setNameIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      setTimeout(() => {
        setNameIndex((prev) => (prev + 1) % nameVariations.length)
        setIsAnimating(false)
      }, 300) // Animation duration
    }, 2000) // Change every 2 seconds for better visibility

    return () => clearInterval(interval)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      closeMobileMenu()
    }
  }

  return (
    <nav className={`fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800 transition-all duration-300 overflow-x-hidden ${
      scrolled ? 'border-b-2 border-red-600' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center py-4">
          <div 
            className={`text-xl sm:text-2xl font-bold gradient-text transition-all duration-300 ease-in-out transform hover:scale-105 ${
              isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
            }`}
            style={{
              fontFamily: nameVariations[nameIndex].font,
              fontWeight: nameVariations[nameIndex].weight
            }}
          >
            {nameVariations[nameIndex].text}
          </div>
          
          <div className="hidden md:flex space-x-4 lg:space-x-8 overflow-x-auto">
            <a href="#home" 
               onClick={(e) => handleNavClick(e, 'home')} 
               className="relative text-gray-300 hover:text-red-500 transition group text-sm lg:text-base whitespace-nowrap">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 bg-red-500 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-20 -z-10"></span>
            </a>
            <a href="#about" 
               onClick={(e) => handleNavClick(e, 'about')} 
               className="relative text-gray-300 hover:text-red-500 transition group text-sm lg:text-base whitespace-nowrap">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 bg-red-500 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-20 -z-10"></span>
            </a>
            <a href="#services" 
               onClick={(e) => handleNavClick(e, 'services')} 
               className="relative text-gray-300 hover:text-red-500 transition group text-sm lg:text-base whitespace-nowrap">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 bg-red-500 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-20 -z-10"></span>
            </a>
            <a href="#portfolio" 
               onClick={(e) => handleNavClick(e, 'portfolio')} 
               className="relative text-gray-300 hover:text-red-500 transition group text-sm lg:text-base whitespace-nowrap">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 bg-red-500 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-20 -z-10"></span>
            </a>
            <a href="#contact" 
               onClick={(e) => handleNavClick(e, 'contact')} 
               className="relative text-gray-300 hover:text-red-500 transition group text-sm lg:text-base whitespace-nowrap">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 bg-red-500 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-20 -z-10"></span>
            </a>
          </div>
          
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <div className={`md:hidden pb-4 transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#home" 
             onClick={(e) => handleNavClick(e, 'home')} 
             className="block py-2 text-gray-300 hover:text-red-500">
            Home
          </a>
          <a href="#about" 
             onClick={(e) => handleNavClick(e, 'about')} 
             className="block py-2 text-gray-300 hover:text-red-500">
            About
          </a>
          <a href="#services" 
             onClick={(e) => handleNavClick(e, 'services')} 
             className="block py-2 text-gray-300 hover:text-red-500">
            Services
          </a>
          <a href="#portfolio" 
             onClick={(e) => handleNavClick(e, 'portfolio')} 
             className="block py-2 text-gray-300 hover:text-red-500">
            Portfolio
          </a>
          <a href="#contact" 
             onClick={(e) => handleNavClick(e, 'contact')} 
             className="block py-2 text-gray-300 hover:text-red-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
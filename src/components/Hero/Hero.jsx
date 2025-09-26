import avatarImage from '../../assets/avatar.png'

const Hero = () => {

  const handleNavClick = (targetId) => {
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black w-full overflow-x-hidden">
      <div className="text-center px-4 w-full max-w-4xl mx-auto">
        <div className="w-32 h-32 mx-auto mb-8 flex items-center justify-center avatar-animate relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full animate-pulse blur-sm scale-110 group-hover:scale-125 transition-transform duration-500"></div>
          <div className="fire-glow w-32 h-32 flex items-center justify-center relative">
            <img 
              src={avatarImage} 
              alt="Lakodros Avatar" 
              className="w-28 h-28 object-cover rounded-full z-10 fire-animate border-2 border-red-500/50 group-hover:border-red-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/50" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-orange-500/10 to-transparent rounded-full animate-pulse group-hover:from-red-500/40 group-hover:via-orange-400/20 transition-all duration-500"></div>
            
            {/* Atrofidagi uchqunlar */}
            <div className="absolute w-full h-full">
              <div className="absolute top-2 left-6 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-8 right-4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-6 left-8 w-1 h-1 bg-red-300 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute bottom-4 right-6 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
              <div className="absolute top-12 left-2 w-0.5 h-0.5 bg-red-500 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-6 right-8 w-1 h-1 bg-orange-300 rounded-full animate-bounce opacity-50"></div>
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 animate-float leading-tight">
          Hi, I am <span className="text-red-600">Lakodros</span>
        </h1>
        
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto px-2">
          <span className="text-white font-semibold">
            Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences.
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button 
            onClick={() => handleNavClick('portfolio')}
            className="bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-red-700 transition transform hover:scale-105 hover-glow animate-pulse text-sm sm:text-base"
          >
            View My Work
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="border border-red-600 text-red-500 px-6 sm:px-8 py-3 rounded-lg hover:bg-red-600 hover:text-white transition transform hover:scale-105 hover-glow text-sm sm:text-base"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
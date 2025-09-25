import AnimatedUnderline from '../AnimatedUnderline/AnimatedUnderline'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import aboutImage from '../../assets/About.png'

const About = () => {
  const [leftRef, leftAnimation] = useScrollAnimation('left')
  const [rightRef, rightAnimation] = useScrollAnimation('right')
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <AnimatedUnderline />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div ref={leftRef} className={`px-4 lg:px-0 ${leftAnimation}`}>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Passionate Developer with 5+ Years Experience
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              I am a full-stack developer who loves creating digital solutions that make a difference. 
              With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
              When I am not coding, you will find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-center lg:text-left">
              {stats.map((stat, index) => (
                <div key={index} className="p-2">
                  <h4 className="font-semibold text-red-600 text-xl sm:text-2xl">{stat.number}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div ref={rightRef} className={`relative px-4 lg:px-0 mt-8 lg:mt-0 ${rightAnimation}`}>
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
              <img 
                src={aboutImage} 
                alt="About Lakodros" 
                className="w-full h-full object-cover rounded-lg transform scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
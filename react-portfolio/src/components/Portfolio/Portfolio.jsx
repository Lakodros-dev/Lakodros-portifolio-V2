import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import AnimatedUnderline from '../AnimatedUnderline/AnimatedUnderline'
import ViewProjectButton from '../ViewProjectButton/ViewProjectButton'
import EditProjectButton from '../EditProjectButton/EditProjectButton'

const Portfolio = ({ projects, isAdminMode, onViewProject, onEditProject }) => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [portfolioRef, portfolioAnimation] = useScrollAnimation('right')

  // Fallback to empty array if no projects provided
  const projectList = projects || []

  return (
    <section id="portfolio" className="py-20 bg-gray-900 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Portfolio</h2>
          <AnimatedUnderline />
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div ref={portfolioRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-0 ${portfolioAnimation}`}>
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="w-full h-48 sm:h-64 bg-gray-800 flex items-center justify-center text-4xl sm:text-6xl text-gray-600 group-hover:scale-110 transition duration-300">
                📷
              </div>
              <div className={`absolute inset-0 bg-black transition duration-300 flex items-center justify-center ${
                hoveredProject === index ? 'bg-opacity-75' : 'bg-opacity-0'
              }`}>
                <div className={`text-white text-center transition duration-300 p-4 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm mb-2">{project.description}</p>
                  <p className="text-xs text-gray-300 mb-4">{project.tech}</p>
                  <div className="flex gap-2 justify-center">
                    {isAdminMode ? (
                      <EditProjectButton 
                        project={project} 
                        onEdit={onEditProject}
                      />
                    ) : (
                      <ViewProjectButton 
                        project={project} 
                        onClick={onViewProject}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
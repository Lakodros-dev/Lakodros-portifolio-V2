import { useState, useEffect } from 'react'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import AdminLogin from './components/AdminLogin/AdminLogin'
import AdminPanel from './components/AdminPanel/AdminPanel'
import ProjectModal from './components/ProjectModal/ProjectModal'
import EditProjectModal from './components/EditProjectModal/EditProjectModal'

function App() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editingProjectIndex, setEditingProjectIndex] = useState(null)
  
  // Default projects
  const defaultProjects = [
    {
      id: 1,
      title: "title",
      tech: "React, Node.js, MongoDB",
      image: "image",
      description: "description"
    },
    {
      id: 2,
      title: "title", 
      tech: "React Native, Firebase",
      image: "image",
      description: "description"
    },
    {
      id: 3,
      title: "title",
      tech: "HTML, CSS, JavaScript", 
      image: "image",
      description: "description"
    },
    {
      id: 4,
      title: "title",
      tech: "Vue.js, Express.js",
      image: "image",
      description: "description"
    },
    {
      id: 5,
      title: "title", 
      tech: "React, API Integration",
      image: "image",
      description: "description"
    },
    {
      id: 6,
      title: "title",
      tech: "Next.js, Tailwind CSS", 
      image: "image",
      description: "description"
    }
  ]
  
  // Initialize projects from localStorage or use default
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) {
      try {
        return JSON.parse(savedProjects)
      } catch (error) {
        console.error('Error parsing saved projects:', error)
        return defaultProjects
      }
    }
    return defaultProjects
  })

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects))
  }, [projects])

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleAdminClick = () => {
    setShowAdminLogin(true)
  }

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true)
  }

  const handleAddProject = (newProject) => {
    const projectWithId = {
      ...newProject,
      id: Date.now() // Simple ID generation
    }
    setProjects([...projects, projectWithId])
  }

  const handleUpdateProject = (index, updatedProject) => {
    const newProjects = [...projects]
    newProjects[index] = updatedProject
    setProjects(newProjects)
  }

  const handleViewProject = (project) => {
    setSelectedProject(project)
    setIsProjectModalOpen(true)
  }

  const handleEditProject = (project) => {
    const index = projects.findIndex(p => p.id === project.id || p === project)
    setSelectedProject(project)
    setEditingProjectIndex(index)
    setIsEditModalOpen(true)
  }

  const handleSaveProject = (updatedProject) => {
    if (editingProjectIndex !== null) {
      handleUpdateProject(editingProjectIndex, updatedProject)
    }
    setIsEditModalOpen(false)
    setEditingProjectIndex(null)
    setSelectedProject(null)
  }

  return (
    <div className="bg-black text-white min-h-screen relative w-full overflow-x-hidden">
      <div className="relative z-10 w-full">
        <Loader isLoading={isLoading} />
      <Navigation 
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />
      <Hero />
      <About />
      <Services />
      <Portfolio 
        projects={projects} 
        isAdminMode={isAdminLoggedIn}
        onViewProject={handleViewProject}
        onEditProject={handleEditProject}
      />
      <Contact />
      {isAdminLoggedIn && (
        <AdminPanel 
          isLoggedIn={isAdminLoggedIn}
          projects={projects}
          onUpdateProject={handleUpdateProject}
          onAddProject={handleAddProject}
          onEditProject={handleEditProject}
        />
      )}
      <Footer onAdminClick={handleAdminClick} />
      <AdminLogin 
        isOpen={showAdminLogin}
        onClose={() => setShowAdminLogin(false)}
        onLogin={handleAdminLogin}
      />
      
      {/* Project View Modal */}
      <ProjectModal 
        isOpen={isProjectModalOpen}
        project={selectedProject}
        onClose={() => {
          setIsProjectModalOpen(false)
          setSelectedProject(null)
        }}
      />
      
      {/* Project Edit Modal */}
      <EditProjectModal 
        isOpen={isEditModalOpen}
        project={selectedProject}
        onClose={() => {
          setIsEditModalOpen(false)
          setSelectedProject(null)
          setEditingProjectIndex(null)
        }}
        onSave={handleSaveProject}
      />
      </div>
    </div>
  )
}

export default App

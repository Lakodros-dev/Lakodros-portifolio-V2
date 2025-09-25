import { useState } from 'react'

const AdminPanel = ({ isLoggedIn, projects, onAddProject, onEditProject }) => {
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [newProject, setNewProject] = useState({
    title: '',
    tech: '',
    description: '',
    image: ''
  })

  if (!isLoggedIn) return null

  const handleAddProject = (e) => {
    e.preventDefault()
    onAddProject(newProject)
    setNewProject({ title: '', tech: '', description: '', image: '' })
    setIsAddingProject(false)
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Admin Panel</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Manage your portfolio projects</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6">
              <div className="w-full h-32 bg-gray-700 flex items-center justify-center text-4xl text-gray-500 mb-4 rounded">
                📷
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
              <button 
                onClick={() => onEditProject(project)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition w-full"
              >
                Edit
              </button>
            </div>
          ))}
          
          {/* Add New Project Card */}
          <div className="bg-gray-900 rounded-lg p-6 border-2 border-dashed border-gray-600 hover:border-red-500 transition">
            {!isAddingProject ? (
              <div 
                className="h-full flex flex-col items-center justify-center cursor-pointer"
                onClick={() => setIsAddingProject(true)}
              >
                <div className="text-6xl text-gray-500 mb-4">+</div>
                <p className="text-white font-semibold">New</p>
              </div>
            ) : (
              <form onSubmit={handleAddProject}>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-red-500 focus:outline-none text-sm"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Technologies"
                    value={newProject.tech}
                    onChange={(e) => setNewProject({...newProject, tech: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-red-500 focus:outline-none text-sm"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    placeholder="Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-red-500 focus:outline-none text-sm h-20 resize-none"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition text-sm flex-1"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAddingProject(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded transition text-sm flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminPanel
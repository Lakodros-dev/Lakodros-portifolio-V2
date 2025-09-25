const ProjectModal = ({ isOpen, project, onClose }) => {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {/* Project Image */}
          <div className="w-full h-64 bg-gray-800 flex items-center justify-center text-6xl text-gray-600 rounded-lg mb-6">
            📷
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
              <p className="text-gray-300 bg-gray-800 p-3 rounded">{project.tech}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
              <p className="text-gray-300 bg-gray-800 p-3 rounded leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.link && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Project Link</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline bg-gray-800 p-3 rounded block"
                >
                  {project.link}
                </a>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            {project.link && (
              <button
                onClick={() => window.open(project.link, '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition duration-300 flex-1"
              >
                Open Project
              </button>
            )}
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded transition duration-300 flex-1"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
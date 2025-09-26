const ViewProjectButton = ({ project, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(project)
    } else {
      // Default behavior - open project link if available
      if (project.link) {
        window.open(project.link, '_blank')
      } else {
        // Show project details or demo
        alert(`Project: ${project.title}\nTech: ${project.tech}\nDescription: ${project.description}`)
      }
    }
  }

  return (
    <button 
      onClick={handleClick}
      className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105"
    >
      View Project
    </button>
  )
}

export default ViewProjectButton
const EditProjectButton = ({ project, onEdit }) => {
  const handleEdit = () => {
    if (onEdit) {
      onEdit(project)
    } else {
      // Default behavior - show edit form or modal
      console.log('Edit project:', project)
      alert(`Editing project: ${project.title}`)
    }
  }

  return (
    <button 
      onClick={handleEdit}
      className="bg-green-600 text-white px-3 py-1 text-sm rounded hover:bg-green-700 transition duration-300 transform hover:scale-105"
    >
      Edit
    </button>
  )
}

export default EditProjectButton
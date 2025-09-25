import { useState, useEffect } from 'react'

const EditProjectModal = ({ isOpen, project, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    tech: '',
    description: '',
    image: '',
    link: ''
  })

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        tech: project.tech || '',
        description: project.description || '',
        image: project.image || '',
        link: project.link || ''
      })
    }
  }, [project])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Edit Project</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Project Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-red-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Technologies</label>
              <input
                type="text"
                name="tech"
                value={formData.tech}
                onChange={handleChange}
                placeholder="e.g., React, Node.js, MongoDB"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-red-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-red-500 focus:outline-none resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Image URL (Optional)</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Project Link (Optional)</label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-red-500 focus:outline-none"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-8">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition duration-300 flex-1"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded transition duration-300 flex-1"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProjectModal
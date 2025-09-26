import { useEffect, useState } from 'react'

const AnimatedUnderline = () => {
  const [glowIntensity, setGlowIntensity] = useState(0.5)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(() => {
        const newIntensity = Math.sin(Date.now() * 0.003) * 0.5 + 0.5
        return newIntensity
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const lineWidth = 100 - (glowIntensity * 30) // Line gets shorter as glow increases

  return (
    <div className="flex justify-center items-center mt-4 mb-6">
      <div className="relative w-full max-w-md flex justify-center">
        {/* Animated line */}
        <div 
          className="h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-75"
          style={{
            width: `${lineWidth}%`,
            boxShadow: `0 0 ${glowIntensity * 20}px rgba(239, 68, 68, ${glowIntensity * 0.8})`
          }}
        />
        {/* Additional glow effect */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1 bg-red-500 rounded-full blur-sm"
          style={{
            width: `${lineWidth * 0.6}%`,
            opacity: glowIntensity * 0.6
          }}
        />
      </div>
    </div>
  )
}

export default AnimatedUnderline
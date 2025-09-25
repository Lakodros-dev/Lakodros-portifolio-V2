import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (direction = 'left') => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation every time the element enters or exits viewport
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out'
    
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return `${baseClass} opacity-0 -translate-x-20`
        case 'right':
          return `${baseClass} opacity-0 translate-x-20`
        case 'up':
          return `${baseClass} opacity-0 translate-y-20`
        case 'down':
          return `${baseClass} opacity-0 -translate-y-20`
        default:
          return `${baseClass} opacity-0 -translate-x-20`
      }
    }
    
    return `${baseClass} opacity-100 translate-x-0 translate-y-0`
  }

  return [elementRef, getAnimationClass()]
}
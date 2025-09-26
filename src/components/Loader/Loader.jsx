import AnimatedRing from '../AnimatedRing/AnimatedRing'

const Loader = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <AnimatedRing className="scale-125 md:scale-150" />
        </div>
        <div className="text-white text-lg md:text-xl font-semibold animate-pulse">
          Loading...
        </div>
        <div className="mt-4 text-red-400 text-xs md:text-sm animate-pulse">
          Please wait while we prepare your experience
        </div>
      </div>
    </div>
  )
}

export default Loader
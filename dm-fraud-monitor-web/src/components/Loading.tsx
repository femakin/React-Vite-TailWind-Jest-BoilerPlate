
const Loading = () => {
  return (
      <div style={{zIndex: 99999}} className="fixed top-0 left-0 w-full h-screen flex items-center justify-center p-16 bg-opacity-50 bg-gray-300">
          <div className='flex flex-col items-center justify-center gap-2'>
              <div className="w-12 h-12 border-[6px] border-gray-300 border-t-[var(--main)] rounded-full inline-block animate-spin"></div>
          </div>
    </div>
  )
}

export default Loading

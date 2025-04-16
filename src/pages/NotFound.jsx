import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-20 text-center">
        
        <div className="text-red-500 font-bold">
          <p className="text-7xl">404</p>
          <p className="text-2xl">PAGE NOT FOUND</p>
        </div>

          <Link to="/" className="flex items-center justify-center space-x-2 mt-8">
            <p className="flex items-center justify-center space-x-1 text-lg mt-8 text-black  group font-medium group">
              <svg className="group-hover:-translate-x-2 duration-300" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" /></svg>
              <span>GO BACK</span>
            </p>
          </Link>
      </div>
    </div>
  )
}

export default NotFound
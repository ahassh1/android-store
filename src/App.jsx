import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h2  className='text-2xl bg-red-500 font-bold underline'> Navbar</h2>
         {/* placeholder Component */}
         <Outlet/>
        <button className='btn btn-primary'>Content</button>
        <h2 className='text-2xl font-bold underline bg-green-500'>Footer</h2>
         
      </div>
    </>
  )
}

export default App

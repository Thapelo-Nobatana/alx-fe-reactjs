import {createRouter, RouterProvider} from 'react-router-dom' ;
import './App.css'
import Navbar from './components/common/Navbar';

const router = createRouter([
  { path: '/', element: <Home /> },
  {path: '/about', element: <About />},
  {path: '/contact', element: <Contact />},
  {path: 'services', element: <Services />},

])
function App() {
  

  return (
    <>
      <RouterProvider router={router} >
        <Navbar />
      </RouterProvider>

    </>
  )
}

export default App

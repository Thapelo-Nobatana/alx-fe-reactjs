import {createRouter, RouterProvider,} from 'react-router-dom' ;
import './App.css'
import Navbar from './components/Navbar';

const Routes = createRouter([
  { path: '/', element: <Home /> },
  {path: '/about', element: <About />},
  {path: '/contact', element: <Contact />},
  {path: 'services', element: <Services />},

])
function App() {
  

  return (
    <>
      <RouterProvider router={Routes} >
        <Navbar />
      </RouterProvider>

    </>
  )
}

export default App


import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Vanlandingpage from './pages/Vanlandingpage'
import Vans from './pages/Vans'
import Vandetails from './pages/Vandetails'

function App() {


  return (
    <>
    <Routes>
    <Route path='' element={<Vanlandingpage/>}/>
    <Route path="about" element={ <About/>}/>
    <Route path='vans' element={<Vans/>}/>
    <Route path='/api/vans/:id' element={<Vandetails/>}/>
    </Routes>
    </>
  )
}

export default App

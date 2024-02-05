
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Vanlandingpage from './pages/Vanlandingpage'
import Vans from './pages/Vans'
import Vandetails from './pages/Vandetails'
import Login from './pages/Login'
import Errorpage from './pages/Errorpage'

function App() {


  return (
    <>
    <Routes>
    <Route path='' element={<Vanlandingpage/>}/>
    <Route path="about" element={ <About/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='vans' element={<Vans/>}/>
    <Route path='/api/vans/:id' element={<Vandetails/>}/>
    <Route path='*' element={<Errorpage/>}/>
    </Routes>
    </>
  )
}

export default App

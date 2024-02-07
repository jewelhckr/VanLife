
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Vanlandingpage from './pages/Vanlandingpage'
import Vans from './pages/Vans'
import Vandetails from './pages/Vandetails'
import Login from './pages/Login'
import Errorpage from './pages/Errorpage'
import Host from './pages/Host'
import Hostvans from './pages/Hostvans'
import HostvansId from './pages/HostvansId'
import Hostreviews from './pages/Hostreviews'
import Hostincome from './pages/Hostincome'
import Signup from './pages/Signup'

function App() {


  return (
    <>
    <Routes>
    <Route path='' element={<Vanlandingpage/>}/>
    <Route path="/signup" element= {<Signup/>} />
    <Route path='login' element={<Login/>}/>
    <Route path="about" element={ <About/>}/>
    <Route path='vans' element={<Vans/>}/>
    <Route path='/api/vans/:id' element={<Vandetails/>}/>
    <Route path="host" element={<Host/>}/>
    <Route path='host/vans' element={<Hostvans/>}/>
    <Route path='/api/host/vans/:id' element={<HostvansId/>}/>
    <Route path='reviews' element={<Hostreviews/>} />
    <Route path='income' element={<Hostincome/>}/>
    <Route path='*' element={<Errorpage/>}/>
    </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'

import Contact from './pages/Contact/Contact'
import About  from './pages/About'
import Navbar from './pages/Navbar/Navbar'
import NotFound from './pages/NotFound/NotFound'
import Projects from './pages/Project/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div className='flex flex-col gap-5 h-screen ' >
  
 <Navbar />



<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>
    </div>
  )
}

export default App

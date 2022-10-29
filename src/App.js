import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.component'
import AddPhoto from './Pages/AddPhoto/AddPhoto'
import Home from './Pages/Home/Home'
import NotFound404 from './Pages/NotFound404/NotFound404'

const App = () => {
  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/add-photo' element={<AddPhoto />} />
      <Route path='*' element={<NotFound404 />} />
    </Routes>
  </>)
}

export default App
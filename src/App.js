import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.component'
import AddPhoto from './Pages/AddPhoto/AddPhoto.page'
import Home from './Pages/Home/Home.page'
import NotFound404 from './Pages/NotFound404/NotFound404.page'

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
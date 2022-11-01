import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.component'
import AddPost from './Pages/AddPost/AddPost.page'
import Home from './Pages/Home/Home.page'
import Local from './Pages/Local/Local.page'
import NotFound404 from './Pages/NotFound404/NotFound404.page'
import Public from './Pages/Public/Public.page'
import { addPost } from './Redux/post/post.actions'

const App = ({ addPost }) => {

  useEffect(() => {
    const newPosts = JSON.parse(localStorage.getItem('posts')) || [];
    for (const post of newPosts) {
      addPost(post);
    }
  }, [])


  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/public' element={<Public />} />
      <Route path='/local' element={<Local />} />
      <Route path='/add-photo' element={<AddPost />} />
      <Route path='*' element={<NotFound404 />} />
    </Routes>
  </>)
}

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post))
})

export default connect(null, mapDispatchToProps)(App);
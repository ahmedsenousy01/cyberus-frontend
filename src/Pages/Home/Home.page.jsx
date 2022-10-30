import React from 'react'
import Post from '../../Components/Post/Post.component'


const Home = () => {
  return (
    <div className='container py-5'>
      <div className="public"></div>
      <div className="local">
        <Post />
      </div>
    </div>
  )
}

export default Home
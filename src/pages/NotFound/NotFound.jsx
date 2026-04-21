import React from 'react'
import { Link } from 'react-router-dom'
import "./Notfound.css";


function NotFound() {
  return (
    <div className="found">
        <h1 className='error'>error 404</h1>

        <Link to="/"><p className="go-home-btn">برگشت به خانه</p></Link>
    </div>

  )
}

export default NotFound;
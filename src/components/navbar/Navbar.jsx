import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="main_row flex flex-col gap-10 bg-green-500 min-h-screen bg-red-500">
                <div className="logo_col">
                    <h1>Logo</h1>
                </div>
                <div className="menu">
                    <ul>
                        <Link to="#"> Chat</Link>
                        <Link to="#"> Group</Link>
                        <Link to="#"> People</Link>
                    </ul>
                </div>
                <div className="menu_btn ">
    <h1>sis</h1>
                </div>
            </div>
        </div>
      
    </nav>
  )
}

export default Navbar

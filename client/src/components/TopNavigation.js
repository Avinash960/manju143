import React from 'react'
import { NavLink } from 'react-router-dom'


function TopNavigation() {
  return (
    <nav>
<NavLink to="/home">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/editprofile">EditProfile</NavLink>
<NavLink to="/task">Task</NavLink>
<NavLink to="/logout">Logout</NavLink>
    </nav>
  )
}

export default TopNavigation
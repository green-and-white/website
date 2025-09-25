import React from 'react'
import {Link} from "react-router-dom"
export default function Other() {
  return (
    <nav>
        <ul>
            <li><Link to = "/">Coming Soon</Link></li>
            <li><Link to = "/other"> Other here</Link></li>
        </ul>
    </nav>
  )
}

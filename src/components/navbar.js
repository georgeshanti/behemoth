import React from 'react'
import { Link } from 'react-router-dom'


// sample navbar
const NavBar = props => (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/talks">Talks</Link></li>
        <li><Link to="/events">Events</Link></li>
    </ul>
);

export default NavBar
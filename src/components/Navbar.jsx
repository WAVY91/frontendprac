import React from 'react'
import Signuptee from '../pages/Signuptee';
import Signintee from '../pages/Signintee';
import { Link } from 'react-router-dom';
import Dashboardtee from '../pages/Dashboardtee';
import Home from '../pages/Home';

const Navbar = () => {
  return (
    <>
    <div className='too'>
        <h4>Home</h4>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signuptee">Signuptee</Link></li>
                <li><Link to="signintee">Signintee</Link></li>
                <li><Link to="signup">Signup</Link></li>
                <li><Link to="/dashboardtee">Dashboardtee</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
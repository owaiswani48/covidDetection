import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { auth } from '../componentschat/firebase'
import SignOut from '../componentschat/SignOut'

function Navbar() {
    const [user] = useAuthState(auth)
    return (
        <div className="navbar"  style={{zIndex:'999999'}}>
            <ul>
                <Link to={"/"}>
                    <li>Resource</li>
                </Link>
                <Link to={"/DashboardCovid"}>
                    <li>covid Detail</li>
                </Link>

                <Link to={"/about"}>
                    <li> About</li>
                </Link>
                <Link to={"/map"}>
                    <li>Hospital Location </li>
                </Link>
                <Link to={"/resourceMap"}>
                    <li> Resouce Location </li>
                </Link>
                {<Link to={`${user ? '/drChat':'/doctor'}`}>
                    <li>{user ? 'Connect to Doctor':'Covid Detector'} </li>
                </Link>}
            {user && <li><SignOut/></li> }
            </ul>

        </div>
    )
}

export default Navbar

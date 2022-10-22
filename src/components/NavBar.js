import React from 'react'
import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom"

// import { useState } from 'react'

const NavBar = () => {
    const data = localStorage.getItem("user")
    const Nav = useNavigate()

    const logout = () => {
        localStorage.clear()
        Nav("/login")
    }
    return (
        <div>
            {
            data ? <ul className='nav-ul'>
                <li> <Link to="/home"> Home </Link> </li>
                <li> <Link onClick={logout} to = "/login"> LogOut </Link> </li>
            </ul>
                :
                <ul className='nav-ul'>
                    <li> <Link to="/signup"> SignUp </Link> </li>
                    <li> <Link to="/login"> LogIn </Link> </li>
                </ul>
            }
        </div>
    )
}

export default NavBar

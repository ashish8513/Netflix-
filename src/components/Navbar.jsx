import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../assets/logo.svg'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import profile from '../assets/badge.png'
import { logout } from '../firebase';
const Navbar = () => {
  const navRef = useRef()
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('navbar-dark')
      }
      else {
        navRef.current.classList.remove('navbar-dark')
      }
    })
  }, [])
  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <CiSearch className='icons' />
        <p>Children</p>
        <FaRegBell />
        <div className='navbar-profile'>
          <img src={profile} alt="" className='profile' />
          <RiArrowDropDownLine />
          <div className="dropdown">
            <p onClick={() => { logout() }}>SignOut</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
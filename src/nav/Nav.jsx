import React, { useState } from 'react'
import Dropdown from './Dropdown-jurusan.jsx'
import DropdownSiswa from './Dropdown-PojokSiswa.jsx'
import BrandLabel from './BrandLabel.jsx'
import Button from './Button.jsx'
import ButtonRound from './ButtonRound.jsx'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <div className="flex items-center justify-between px-4 sm:px-10 py-5 border-b-2 border-gray-200 w-screen sticky top-0 z-20 bg-white">
      <nav className="flex items-center flex-row w-full">
        <BrandLabel />
        {/* Hamburger icon for mobile */}
        <button
          className="lg:hidden ml-auto p-2 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Nav links */}
        <div
          className={`ml-0 lg:ml-10 flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0 lg:space-x-4 lg:flex ${menuOpen ? 'flex fixed top-[72px] left-0 w-screen bg-white border-b-2 border-gray-200 py-4 px-4 z-50' : 'hidden lg:flex'} transition-all duration-200`}
        >
          <Button label="Home" link="#" />
          <Dropdown />
          <DropdownSiswa />
          <Button label="Profile" link="https://smkyadikasoreang.sch.id/home/profile"/>
          <Button label="Pendaftaran" link="https://smkyadikasoreang.sch.id/Keterangan"/>
          <ButtonRound label="PPDB" link="https://smkyadikasoreang.sch.id/Ppdb"/>
          <ButtonRound label="Login" link="https://smkyadikasoreang.sch.id/Ppdb"/>
        </div>
      </nav>
    </div>
  )
}

export default Nav
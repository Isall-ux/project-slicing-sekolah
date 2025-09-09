import React from 'react'
import Dropdown from './Dropdown-jurusan.jsx'
import DropdownSiswa from './Dropdown-PojokSiswa.jsx'
import BrandLabel from './BrandLabel.jsx'
import Button from './Button.jsx'
import ButtonRound from './ButtonRound.jsx'

const Nav = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5 border-b-2 border-gray-200'>
        <nav className='flex items-center flex-row sticky top-0'>
            <BrandLabel />
            <div className='ml-10 flex items-center space-x-4'>
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
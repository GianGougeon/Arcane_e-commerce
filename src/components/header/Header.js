"use client";

import React, {useState} from 'react'
// import react icon
import { BiSearch } from 'react-icons/bi'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
// logo

const Header = () => {
    const [hamburger, sethamburger] = useState(true);

    const handleHamburger = () => {
        sethamburger(!hamburger);
    }
    return (
        <header>
            <nav className="navbar">
                {/* LOGO */}
                <div className="logo">
                    <div>
                    <img src="/img/header/Arcane_Title_Text.png" alt="logo" />
                    <p>E-COMMERCE</p>
                    </div>
                </div>
                {/* NAVIGATION MENU */}
                <ul className="nav-links">
                    {/* USING CHECKBOX HACK */}
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" onClick={handleHamburger} className="hamburger">{hamburger ? <GiHamburgerMenu /> : <IoClose />}</label>
                    {/* NAVIGATION MENUS */}
                    <div className="menu">
                        <li><Link href="/">Clothes</Link></li>
                        <li><Link href="/">Deco</Link></li>
                        <li><Link href="/">Other</Link></li>
                    </div>
                </ul>
                <ul className='menu-util'>
                    <li>
                        <Link href="/">
                            <BiSearch style={{transform: "rotateY(180deg)"}} />
                            <p>Serach</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <RiShoppingBag3Line />
                            <p>Cart</p>
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header
import React, {useState} from 'react'
// import react icon
import { BiSearch } from 'react-icons/bi'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
// logo
import logo from './../../assets/img/header/Arcane_Title_Text.png'

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
                    <img src={logo} alt="logo" />
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
                        <li><a href="/">Clothes</a></li>
                        <li><a href="/">Deco</a></li>
                        <li><a href="/">Other</a></li>
                    </div>
                </ul>
                <ul className='menu-util'>
                    <li>
                        <a href="/">
                            <BiSearch style={{transform: "rotateY(180deg)"}} />
                            <p>Serach</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <RiShoppingBag3Line />
                            <p>Cart</p>
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header
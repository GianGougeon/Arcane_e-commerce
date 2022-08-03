import React from 'react'
import img from './../../assets/img/footer/p-y-z_auto_x2.jpg'
// icons
import { BsArrowRight } from 'react-icons/bs'
import { TiSocialFacebook } from 'react-icons/ti'
import { SiInstagram, SiTwitter } from 'react-icons/si'
// logo
import logo from './../../assets/img/header/Arcane_Title_Text.png'

const footer = () => {
    return (
        <footer>
            <div>
                <img src={img}></img>
                <form className='footer-subscribe-form'>
                    <label for="email container">
                        <p>
                            <span>Subscribe</span>to out newsletter
                        </p>
                        <p>
                            and get until <span>15%</span> off your next order
                        </p>
                    </label>
                    <input id='email' name="email" placeholder="EMAIL" type="text" />
                    <BsArrowRight style={{ position: "absolute", top: "64%", left: "300px" }} />
                </form>
            </div>
            <div className='container'>
                <div className='row footer-center'>
                    <div className='col-md-2'>
                        <div>
                            <div>
                                <h3>Catalogue</h3>
                                <ul>
                                    <li><a>Clothes</a></li>
                                    <li><a>Deco</a></li>
                                    <li><a>Other</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div>
                            <div>
                                <h3>About</h3>
                                <ul>
                                    <li><a>Customer servicie</a></li>
                                    <li><a>Privacy policy</a></li>
                                    <li><a>Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='logo-footer'>
                            <div>
                                <ul>
                                    <li>
                                        <a>
                                            <img src={logo} alt="logo" />
                                            <h3>E-COMMERCE</h3>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div>
                            <div>
                                <h3>Support</h3>
                                <ul>
                                    <li><a>Return and Exchanges</a></li>
                                    <li><a>Order status</a></li>
                                    <li><a>Delivery</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 footer-social'>
                        <div>
                            <div>
                                <h3>Follow us</h3>
                                <ul>
                                    <li><a><SiInstagram/></a></li>
                                    <li><a><TiSocialFacebook/></a></li>
                                    <li><a><SiTwitter/></a></li>
                                </ul>
                                <div className='footer-copy'>
                                    <span>
                                        2022©Arcane. E-commerce.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer
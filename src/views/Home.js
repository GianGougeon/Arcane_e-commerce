import React from 'react'
import arcaneImage from './../assets/img/arcane-netflix-series-characters.jpg'
import jaycePort from './../assets/img/home/jaycePort.jpg'
import { BsArrowRight } from 'react-icons/bs'
import Home_clothes from '../components/home_clothes'
import Home_deco from '../components/home_deco'
import Home_other from '../components/home_other'



const Home = () => {

    return (
        <>
            <section className="home-section">
                <h1>Become <b>a legend</b></h1>
                <div className='home-catalog container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-8'>
                            <div>
                                <img src={arcaneImage} alt="Arcane"></img>
                            </div>
                            <img className='Jayce' src={jaycePort} alt="Jayce"></img>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <div>
                                <p>
                                    Explore a lot of different merch <br></br>
                                    of the world of Arcane
                                </p>
                                <button>Go to cataloge<BsArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Home_clothes />
            {/* <Home_deco />
            <Home_other /> */}



            <div style={{ margin: "500px" }}></div>
        </>
    )
}

export default Home
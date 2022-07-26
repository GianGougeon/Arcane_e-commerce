import React from 'react'
import arcaneImage from './../assets/img/arcane-netflix-series-characters.jpg'
import {BsArrowRight} from 'react-icons/bs'

const Home = () => {
    return (
        <>
            <section className="home-section">
                <h1>Become <b>a legend</b></h1>
                <div className='home-catalog container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <img src={arcaneImage}></img>
                        </div>
                        <div className='col-md-5'>
                           <div>
                           <p>
                                Explore a lot of different merch <br></br>
                                of the world of Arcane
                            </p>
                            <button>Go to the cataloge<BsArrowRight /></button>
                           </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='home-section-clothes'>

            </section>
        </>
    )
}

export default Home
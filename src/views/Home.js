import React from 'react'
import arcaneImage from './../assets/img/arcane-netflix-series-characters.jpg'
const Home = () => {
    return (
        <>
            <section className="home-section">
                <h1>Become <b>a legend</b></h1>
                <div className='home-catalog container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={arcaneImage}></img>
                        </div>
                        <div className='col-md-6'>
                            <p>
                                Explore a lot of different merch
                                of the world of Arcane
                            </p>
                            <button>Go to the cataloge</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home
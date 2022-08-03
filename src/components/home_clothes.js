import { BsArrowRight } from 'react-icons/bs'
import img11 from './../assets/img/gptr,1400x,front,black-c,188,133,1000,1000-bg,f8f8f8.jpg'

import img1 from './../assets/img/home/1.png'
import img2 from './../assets/img/home/2.png'
import img3 from './../assets/img/home/3.png'
import img4 from './../assets/img/home/4.png'
import img5 from './../assets/img/home/5.png'


const home_clothes = () => {
    return (
        <section className='home-section-clothes container2'>
            <h2>
                Clothes
            </h2>
            <div className='row home-section-clothes-border'>
                <div className='col-md-4'>
                    {/* img border 1 */}
                    <a href=''>
                        <div>
                            <div>
                                <img src={img1} />
                            </div>
                        </div>
                        <span>
                            $13
                        </span>
                        <span>
                            Sale
                        </span>
                        <div className='home-clohes-info'>
                            <span>
                                T-Shirt for Women
                            </span>
                            <span>
                                Zaun
                            </span>
                        </div>
                    </a>
                </div>
                <div className='col-md-4'>
                    {/* img border 1 */}
                    <a href="">
                        <div>
                            <div>
                                <img src={img2} />
                            </div>
                        </div>
                        <span>
                            $160
                        </span>
                        <span>
                        </span>
                        <div className='home-clohes-info-2'>
                            <span>
                                Winter jacket for women
                            </span>
                            <span>
                                Jinx and her drawing
                            </span>
                        </div>
                    </a>

                </div>
                <div className='col-md-4'>
                    {/* img border 1 */}
                    <a href="">
                        <div>
                            <div>
                                <img src={img3} />
                            </div>
                        </div>
                        <span>
                            $15
                        </span>
                        <span>
                        </span>
                        <div className='home-clohes-info'>
                            <span>
                                T-shirt for men
                            </span>
                            <span>
                                Arcane, Jinx crying inside
                                        the fire
                            </span>
                        </div>
                    </a>

                </div>
                <div className='col-md-6'>
                    {/* img border 1 */}
                    <a href="">
                        <div>
                            <div>
                                <img src={img4} />
                            </div>
                        </div>
                        <span>
                            $13
                        </span>
                        <span>
                            Sale
                        </span>
                        <div className='home-clohes-info'>
                            <span>
                            Longsleeve for men
                            </span>
                            <span>
                                Arcane
                            </span>
                        </div>
                    </a>

                </div>
                <div className='col-md-6'>
                    {/* img border 1 */}
                    <a href="">
                        <div>
                            <div>
                                <img src={img5} />
                            </div>
                        </div>
                        <span>
                            $13
                        </span>
                        <span>
                            Sale
                        </span>
                        <div className='home-clohes-info'>
                            <span>
                            Zip sweatshirt for men
                            </span>
                            <span>
                            League of Legends
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <button>See More<BsArrowRight /></button>


        </section>
    )
}

export default home_clothes
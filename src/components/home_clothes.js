import { BsArrowRight } from 'react-icons/bs'


const home_clothes = () => {
    return (
        <section className='home-section-clothes container'>
            <h2>
                Clothes
            </h2>
            <div className='img-home-border'>
                {/* img border 1 */}
                <div>
                    <img src=''></img>
                    <span>
                        $13
                    </span>
                    <span>
                        Sale
                    </span>
                </div>
                {/* img border 2 */}
                <div>
                    <img src=''></img>
                    <span>
                        $160

                    </span>
                    <span>
                    </span>
                </div>
                {/* img border 3 */}
                <div>
                    <img src=''></img>
                    <span>
                        $15
                    </span>
                    <span>
                    </span>
                </div>
                {/* img border 4 */}
                <div>
                    <img src=''></img>
                    <span>
                        $15
                    </span>
                    <span>
                    </span>
                </div>
                {/* img border 5 */}
                <div>
                    <img src=''></img>
                    <span>
                        $15
                    </span>
                    <span>
                    </span>
                </div>
            </div>
            <button>See More<BsArrowRight /></button>
        </section>
    )
}

export default home_clothes
import { BsArrowRight } from 'react-icons/bs'

const home_deco = () => {
    
    return (
        <section className='home-section-deco container'>
            <h2>
                Deco
            </h2>
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='img-home-deco'>
                            <div>
                                <div>
                                    <img src='https://sm.ign.com/ign_es/photo/default/en-us-arcane-character-jayce-vertical-4x5-rgb-1632264982240_c2rb.jpg'></img>
                                </div>
                                <span>
                                    $15
                                </span>
                            </div>
                            <div>
                                <div>
                                    <img src='https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/4/945720211216-uau-posters-arcane-league-of-legends-lol-series-1.jpg'></img>
                                </div>
                                <span>
                                    $15
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='img-home-deco img-home-deco2'>
                            <div>
                                <div>
                                    <img src='https://es.web.img3.acsta.net/r_1280_720/pictures/21/11/16/14/35/2231192.jpg'></img>
                                </div>
                                <span>
                                    $15
                                </span>
                            </div>
                            <div>
                                <div>
                                    <img src='https://preview.redd.it/tb2urmxsvvo71.jpg?width=640&crop=smart&auto=webp&s=7fa3285b532cebfdf70688c16a4065e3b3651da1'></img>
                                </div>
                                <span>
                                    $15
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <button>See All <BsArrowRight/></button>
        </section >
    )
}

export default home_deco
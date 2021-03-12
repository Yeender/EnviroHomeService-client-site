import Link from 'next/link';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import backgroundVideo from '../../rsc/Header.mp4';

const Header = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <header className="d-flex align-items-center">
                        <div className="container-xl">
                            <div className="header-contents">
                                <h2>
                                    GET A QUOTE RIGHT NOW ON <br /> YOUR NEXT RENOVATION!
                                </h2>
                                <Link href="/contactUs">
                                    <button className="header-contentsButton">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </header>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="slider-heder2 d-flex align-items-center">
                            <div className="container-xl">
                                <div className="slider-heder2-contents">
                                    <h2>
                                        GET A QUOTE RIGHT NOW ON <br /> YOUR NEXT RENOVATION!
                                    </h2>
                                    <Link href="/contactUs">
                                        <button className="header-contentsButton">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="slider-heder3 d-flex align-items-center">
                            <div className="container-xl">
                                <div className="slider-heder2-contents">
                                    <h2>
                                        GET A QUOTE RIGHT NOW ON <br /> YOUR NEXT RENOVATION!
                                    </h2>
                                    <Link href="/contactUs">
                                        <button className="header-contentsButton">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <style jsx>{`
                .slider-heder2 {
                    background: url('https://i.imgur.com/kfMAR6U.jpg') 0 0 / cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 650px;
                }
                .slider-heder3 {
                    background: url('https://i.imgur.com/BcGhBB7.jpg') 0 0 / cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 600px;
                }

                .slider-heder2-contents h2 {
                    font-size: 50px;
                    font-weight: 900;
                    color: rgb(202, 5, 71);
                    text-shadow: 2px 2px #fff;
                }
            `}</style>
        </div>
    );
};

export default Header;

import React from 'react';
import Slider from 'react-slick';
import { BsBroadcast } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiReact } from 'react-icons/si'

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // vertical: true,
        // verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "", position: "absolute", top: "117%", right: "2%" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "", position: "absolute", top: "117%", left: "85%" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className='py-10 px-3'>
            <div className=' mb-10'>
                <h3 className='text-2xl text-center font-bold about-text-h3'>Skills</h3>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                <div className='border-2 py-4 px-4 border-blue-500 rounded-lg '>
                    <div className='relative'>
                        <Slider {...settings}>
                            <img className='rounded-lg lg:h-[250px] md:h-[200px]' src="img/user.png" alt="" />
                            <img className='rounded-lg lg:h-[250px] md:h-[200px]' src="img/user.png" alt="" />
                            <img className='rounded-lg lg:h-[250px] md:h-[200px]' src="img/user.png" alt="" />
                            <img className='rounded-lg lg:h-[250px] md:h-[200px]' src="img/user.png" alt="" />
                        </Slider>
                    </div>
                    <div>
                        <div>
                            <h3 className='text-xl font-bold mt-4 mb-3'>hello world</h3>
                        </div>
                        <hr className=' border-blue-500 mt-4 mb-3 border-2 rounded-lg' />
                        <div className=' flex justify-between items-center'>
                            <div className='flex items-center'>
                                <h5 className='font-bold me-2'>
                                    20/8/2021
                                </h5>
                                <div className=' text-lg'>
                                    <SiReact />
                                </div>
                            </div>
                            <div className='flex justify-end items-center'>
                                <a href="#" className=' flex items-center me-5'>
                                    <span className='me-2 text-2xl'><BsBroadcast></BsBroadcast></span>
                                    <span>Live</span>
                                </a>
                                <a href="#" className=' flex items-center'>
                                    <span className='me-2 text-2xl'><FaGithub></FaGithub></span>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className=' py-2 px-2 border-2 border-blue-400'>
                
            </div> */}
        </div>
    );
};

export default Projects;
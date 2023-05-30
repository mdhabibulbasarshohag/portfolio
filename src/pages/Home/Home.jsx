import React, { useState } from 'react';
// import { FaRibbon } from "react-icons/fa";

import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Home = () => {
    const { textColor, setTextColor } = useState('red')
    return (
        <div className='flex flex-col justify-center items-center pt-16 px-1 lg:pt-10 md:pt-24'>
            <div className='text-center'>
                <h5 className=' font-bold text-xl text-user'>Hi, my name is</h5>
                <h1 className="glitch text-6xl my-5 font-extrabold text-blue-400n" data-glitch="MD. HABIBUL BASAR SHOHAG">MD. HABIBUL BASAR SHOHAG</h1>
                <h2 className='mb-7 text-base md:text-3xl font-bold'>
                    <span>I am a Professional</span>
                    <span
                        className='font-extrabold ms-2 text-blue-400'
                    >
                        <TypeAnimation
                            sequence={[
                                'FRONTEND DEVELOPER !',
                                1500,
                                'WEB DEVELOPER !',
                                1500,
                                'WEB DESIGNER !',
                                1500,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </span>
                </h2>
                <div>
                    <Link className='py-3 px-5 inline-block font-bold text-white bg-blue-400 my-3 rounded-lg' to='/about'>About</Link>
                </div>
            </div>
            <div className='pt-10 md:pt-16 lg:pt-10'>
                <div className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[350px] img-over lg:h-[350px]'>
                    <img className=' w-full h-full user-img' src="img/user.png" alt="" />
                    {/* <div className=' w-20 h-20 bg-blue-400 absolute top-0 left-0 user-img-left'>
                        <div className='flex text-2xl justify-center items-center'>
                            <FaRibbon className='text-3xl' />
                            <h3>2.5</h3>
                        </div>
                        <div>
                            <h4>Years Experience</h4>
                        </div>
                    </div>
                    <div className=' w-20 h-20 bg-blue-400 absolute bottom-0 right-0
                    user-img-right
                    '>hello</div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
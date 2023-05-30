import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const Right = () => {
    return (
        <div className='fixed md:-right-2 -right-5  h-full z-10 flex justify-center items-center'>
            <div className=" flex justify-center items-center flex-col">
                <div>
                    <a href="img/cv.pdf" download='cv' className='py-1 px-3 mb-10 rounded-lg inline-block rotate-90 bg-blue-400 font-bold text-white'>Resume</a>
                </div>
                <h3 className='rotate-90 my-10 font-bold'>Follow me</h3>
                <div>
                    <BsArrowDown />
                </div>
                <div className='mt-4 flex flex-col justify-center items-center'>
                    <a className='text-xl md:text-2xl py-2 px-2 inline-block my-1 rounded-lg text-white bg-blue-400' href="#"><FaFacebook /></a>
                    <a className='text-xl md:text-2xl py-2 px-2 inline-block my-1 rounded-lg text-white bg-blue-400' href="#"><FaGithub /></a>
                    <a className='text-xl md:text-2xl py-2 px-2 inline-block my-1 rounded-lg text-white bg-blue-400' href="#"><FaLinkedin /></a>
                    <a className='text-xl md:text-2xl py-2 px-2 inline-block my-1 rounded-lg text-white bg-blue-400' href="#"><FaInstagram /></a>
                </div>
            </div>
        </div>
    );
};

export default Right;
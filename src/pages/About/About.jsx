import React from 'react';
import './About.css'
import { FaCalendar, FaFileCode } from 'react-icons/fa';

const About = () => {
    return (
        <div className='py-10 px-3'>
            <div className='text-center mb-10'>
                <h3 className='text-2xl mb-5 text-center font-bold about-text-h3'>About Me</h3>
                <p >I am interested in a development position in a challenging environment that focuses on R&D, best practices, web application development and allows us to study bleeding-edge technologies.I have more than 2.5 years of experience in front end development with innovative front end developers. My expertise includes front end development using any of the latest front end technologies. HTML5, CSS3, SASS, Bootstrap, Tailwind Css, JavaScript, Query, React, React Router, Firebase, Material UI, Figma and Full Responsive Design.</p>
            </div>
            <div className='flex justify-center items-center flex-col lg:flex-row mb-10'>
                <div className="md:mb-10 mb-5 lg:mb-0 lg:w-2/5 flex justify-center items-center">
                    <img className='w-[300px] md:w-[450px] h-[300px] lg:h-[400px] lg:w-[400px] md:h-[450px]' src="img/user.png" alt="user" />
                </div>
                <div className='lg:w-3/5'>
                    <div className="text-start mb-10">
                        <h2 className="lg:text-3xl my-3 md:my-5 md:text-2xl font-semibold">
                            <span className='h2Span font-extrabold'>Name : </span>
                            <span>MD HABIBUL BASAR SHOHAG</span>
                        </h2>
                        <h2 className="lg:text-3xl my-3 md:my-5 md:text-2xl font-semibold">
                            <span className='h2Span font-extrabold'>Profile : </span>
                            <span>Full Stack Developer</span>
                        </h2>
                        <h2 className="lg:text-3xl my-3 md:my-5 md:text-2xl font-semibold">
                            <span className='h2Span font-extrabold'>Email : </span>
                            <span>mdhabibulbasarshohag1@gmail.com</span>
                        </h2>
                        <h2 className="lg:text-3xl my-3 md:my-5 md:text-2xl font-semibold">
                            <span className='h2Span font-extrabold'>Phone : </span>
                            <span>+8801880800395</span>
                        </h2>
                    </div>
                    <div className='flex flex-col md:flex-row lg:justify-start justify-center items-center'>
                        <div className='border-2 w-full mb-3 md:mb-0 md:mr-3 md:w-auto border-blue-400 py-2 px-3 rounded-lg bg-slate-900 flex justify-start items-center'>
                            <FaCalendar className='text-3xl mr-3 text-blue-400' />
                            <div>
                                <h3 className='text-2xl font-bold'>2.5+</h3>
                                <p>Years Experience</p>
                            </div>
                        </div>
                        <div className='border-2 w-full md:w-auto border-blue-400 py-2 px-3 rounded-lg bg-slate-900 flex justify-start items-center'>
                            <FaFileCode className='text-3xl mr-3 text-blue-400' />
                            <div>
                                <h3 className='text-2xl font-bold'>70+</h3>
                                <p>Complete Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
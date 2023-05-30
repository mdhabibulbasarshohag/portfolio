import React from 'react';
import './Skills.css';
import { FaBootstrap, FaCss3, FaFigma, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiAdobephotoshop, SiExpress, SiFirebase, SiJavascript, SiJquery, SiMongodb, SiReactrouter, SiTailwindcss } from 'react-icons/si'
import { BsFillRocketFill } from 'react-icons/bs'

const Skills = () => {
    const skills = [
        {
            id: 1,
            name: 'HTML',
            icon: <FaHtml5 />,
            levelCcs: 'w-[90%]',
            levelNumber: '90%'
        },
        {
            id: 2,
            name: 'CSS',
            icon: <FaCss3 />,
            levelCcs: 'w-[87%]',
            levelNumber: '87%'
        },
        {
            id: 3,
            name: 'BOOTSTRAP',
            icon: <FaBootstrap />,
            levelCcs: 'w-[85%]',
            levelNumber: '85%'
        },
        {
            id: 4,
            name: 'Tailwind css',
            icon: < SiTailwindcss />,
            levelCcs: 'w-[80%]',
            levelNumber: '80%'
        },
        {
            id: 5,
            name: 'Jquery',
            icon: < SiJquery />,
            levelCcs: 'w-[77%]',
            levelNumber: '77%'
        },
        {
            id: 6,
            name: 'JavaScript',
            icon: < SiJavascript />,
            levelCcs: 'w-[75%]',
            levelNumber: '75%'
        },
        {
            id: 7,
            name: 'React js',
            icon: < FaReact />,
            levelCcs: 'w-[70%]',
            levelNumber: '70%'
        },
        {
            id: 8,
            name: 'React Router',
            icon: < SiReactrouter />,
            levelCcs: 'w-[60%]',
            levelNumber: '60%'
        }
    ]

    const backEnds = [
        {
            id: 1,
            name: 'Node js',
            icon: < FaNodeJs />,
            levelCcs: 'w-[67%]',
            levelNumber: '67%'
        },
        {
            id: 2,
            name: 'Express js',
            icon: < SiExpress />,
            levelCcs: 'w-[65%]',
            levelNumber: '65%'
        },
        {
            id: 3,
            name: 'Google Firebase',
            icon: < SiFirebase />,
            levelCcs: 'w-[65%]',
            levelNumber: '65%'
        },
        {
            id: 4,
            name: 'MongoDB',
            icon: < SiMongodb />,
            levelCcs: 'w-[60%]',
            levelNumber: '60%'
        },
    ]
    const uxUis = [
        {
            id: 1,
            name: 'Adobe PhotoShop',
            icon: < SiAdobephotoshop />,
            levelCcs: 'w-[70%]',
            levelNumber: '70%'
        },
        {
            id: 2,
            name: 'Figma',
            icon: < FaFigma />,
            levelCcs: 'w-[75%]',
            levelNumber: '75%'
        }
    ]


    return (
        <div className='py-10 px-3'>
            <div className=' mb-10'>
                <h3 className='text-2xl text-center font-bold about-text-h3'>Skills</h3>
            </div>
            <div className=' mb-10'>
                <h3 className='text-2xl text-center font-bold about-text-h3'>Front End</h3>
            </div>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    skills.map(skill => <div
                        className='border-2 py-3 px-5 bg-slate-800 border-blue-500 rounded-lg'
                        key={skill.id}
                    >
                        <h5 className='flex justify-between items-center px-3'>
                            <span className=' text-xl text-blue-50 font-extrabold'>
                                {skill.name}
                            </span>
                            <span className='text-2xl text-blue-50'>
                                {skill.icon}
                            </span>
                        </h5>
                        <div className='bg-blue-100 mt-2 rounded-lg '>
                            <div className={`${skill.levelCcs} bg-skill relative rounded-lg`}>
                                <p className='text-right mr-2 font-semibold text-white'>{skill.levelNumber}</p>
                                <BsFillRocketFill className='skill-level text-blue-500 rotate-90 md:text-2xl text-lg top-1/2 -translate-y-1/2' />
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className=' my-10'>
                <h3 className='text-2xl text-center font-bold about-text-h3'>Back End</h3>
            </div>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    backEnds.map(backEnd => <div
                        className='border-2 py-3 px-5 bg-slate-800 border-blue-500 rounded-lg'
                        key={backEnd.id}
                    >
                        <h5 className='flex justify-between items-center px-3'>
                            <span className=' text-xl text-blue-50 font-extrabold'>
                                {backEnd.name}
                            </span>
                            <span className='text-2xl text-blue-50'>
                                {backEnd.icon}
                            </span>
                        </h5>
                        <div className='bg-blue-100 mt-2 rounded-lg '>
                            <div className={`${backEnd.levelCcs} bg-skill relative rounded-lg`}>
                                <p className='text-right mr-2 font-semibold text-white'>{backEnd.levelNumber}</p>
                                <BsFillRocketFill className='skill-level text-blue-500 rotate-90 md:text-2xl text-lg top-1/2 -translate-y-1/2' />
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className=' my-10'>
                <h3 className='text-2xl text-center font-bold about-text-h3'>UX / UI</h3>
            </div>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    uxUis.map(uxUi => <div
                        className='border-2 py-3 px-5 bg-slate-800 border-blue-500 rounded-lg'
                        key={uxUi.id}
                    >
                        <h5 className='flex justify-between items-center px-3'>
                            <span className=' text-xl text-blue-50 font-extrabold'>
                                {uxUi.name}
                            </span>
                            <span className='text-2xl text-blue-50'>
                                {uxUi.icon}
                            </span>
                        </h5>
                        <div className='bg-blue-100 mt-2 rounded-lg '>
                            <div className={`${uxUi.levelCcs} bg-skill relative rounded-lg`}>
                                <p className='text-right mr-2 font-semibold text-white'>{uxUi.levelNumber}</p>
                                <BsFillRocketFill className='skill-level text-blue-500 rotate-90 md:text-2xl text-lg top-1/2 -translate-y-1/2' />
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;
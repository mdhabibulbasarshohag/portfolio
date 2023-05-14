import React, { useState } from 'react';
import './Left.css';
import { NavLink } from 'react-router-dom';
import { AiFillFolder, AiFillHome, AiFillMessage, AiOutlineAlignRight, AiOutlineClose } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import Bottom from '../Bottom/Bottom';


const Left = () => {
    const [open, setOpen] = useState(false);
    const items = [
        {
            id: 1,
            name: 'Home',
            path: '/',
            icon: <AiFillHome />
        },
        {
            id: 2,
            name: 'About',
            path: '/about',
            icon: <FaUser />
        },
        {
            id: 3,
            name: 'Skills',
            path: '/skills',
            icon: <BsTools />
        },

        {
            id: 4,
            name: 'Project',
            path: '/project',
            icon: <AiFillFolder />
        },
        {
            id: 5,
            name: 'Contact',
            path: '/contact',
            icon: <AiFillMessage />
        }
    ]
    return (
        <div className=''>
            <div className={`fixed h-full z-10 w-full lg:left-0 md:w-auto duration-150 ease-in-out bg-slate-700 md:bg-transparent flex justify-center items-center ${open ? ' left-0' : ' -left-full'}`} >
                <ul className='flex flex-col justify-center items-center'>
                    {
                        items.map(item => <li
                            key={item.id}
                            className='md:rotate-90 text-lg font-bold md:my-5 py-2 text-center md:py-3'
                        >
                            <NavLink className={({ isActive, isPending }) =>
                                isActive
                                    ? " bg-blue-400 py-2 px-3 duration-75 ease-in rounded-lg text-white"
                                    : isPending
                                        ? ""
                                        : ""
                            } to={item.path}>
                                {item.name}
                            </NavLink>
                        </li>)
                    }
                </ul>
            </div>
            <div className="block lg:hidden z-10 fixed right-5 top-5">
                <button onClick={() => setOpen(!open)} className="py-2 text-white z-10 px-2 bg-blue-400 pulser">
                    {open ? < AiOutlineClose className=' text-3xl duration-100 ' /> : <AiOutlineAlignRight className=' text-3xl ' />}
                </button>
            </div>
            <div className='z-10 fixed bottom-10 left-1/2 -translate-x-1/2'>
                <div className='flex justify-between items-center py-2 px-2 bg-slate-700 rounded-lg'>
                    {
                        items.map(item => <Bottom
                            item={item}
                            key={item.id}
                        ></Bottom>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Left;
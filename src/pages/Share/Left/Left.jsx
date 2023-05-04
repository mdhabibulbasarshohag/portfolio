import React, { useState } from 'react';
import './Left.css';
import { Link } from 'react-router-dom';
import { TfiAlignRight } from 'react-icons/tfi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Left = () => {
    const [open, setOpen] = useState(false);
    const items = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'about', path: '/about' },
        { id: 3, name: 'Orders', path: '/orders' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' }
    ]
    return (
        <div className=''>
            <div className={`fixed h-full w-full lg:left-0 md:w-auto bg-purple-100 lg:bg-transparent flex justify-center items-center ${open ? ' left-0' : ' -left-full'}`} >
                <div className='flex flex-col'>
                    {
                        items.map(item => <Link
                            key={item.id}
                            to={item.path}
                            className={`md:rotate-90 lg:py-5 py-2 text-lg font-bold text-purple-600 bg-purple-200 text-center active:text-green-300`}
                        >{item.name}</Link>)
                    }
                </div>
            </div>
            <div className="block lg:hidden fixed right-5 top-5">
                <button onClick={() => setOpen(!open)} className="py-4 z-10 px-4 bg-teal-100 pulser">
                    {open ? < AiOutlineLoading3Quarters className=' text-xl' /> : <TfiAlignRight className=' text-xl' />}
                </button>
            </div>
        </div >
    );
};

export default Left;
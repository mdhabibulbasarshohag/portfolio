import React from 'react';
import './Bottom.css';
import { NavLink } from 'react-router-dom';

const Bottom = ({ item }) => {
    const { icon, path } = item;
    return (
        <div className='md:mx-2 text-sm mx-1 md:text-lg'>
            <NavLink
                className={({ isActive, isPending }) =>
                    isActive
                        ? " text-blue-400 bg-slate-400 text-3xl lg:text-4xl"
                        : isPending
                            ? ""
                            : ""
                }
                to={path}
            >{icon}</NavLink>
        </div>
    );
};

export default Bottom;
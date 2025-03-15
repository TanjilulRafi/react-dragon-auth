import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"

const NavBar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center ">
                <div>
                <img src={userIcon} alt="" />
                </div>
                <Link to="/auth/login" className='btn btn-neutral'>LogIn</Link>
            </div>
            
        </div>
    );
};

export default NavBar;
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext);
    
    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.name}</div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center ">
                <div>
                    {user && user?.email ? <div>
                        <img className='w-10 rounded-full' src={user?.photoURL}></img>
                        <p>{user?.displayName}</p>
                        </div> : <img src={userIcon} alt="" />}
                </div>
                {
                    user && user?.email ? 
                    <button onClick={logOut} className='btn btn-neutral rounded-none'>LogOut</button>
                    : <Link to="/auth/login" className='btn btn-neutral'>LogIn</Link>
                }
                
            </div>
            
        </div>
    );
};

export default NavBar;